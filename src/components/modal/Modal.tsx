import MuiModal from '@material-ui/core/Modal';
import { useInfoStore } from 'src/store';
import { useEffect, useState, useContext } from 'react';
import { Element } from 'src/interfaces/app.interfaces';
import ReactPlayer from 'react-player';
import { BsFillPlayFill, BsPlusLg, BsFillPauseFill } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineLike } from 'react-icons/ai';
import { GoMute, GoUnmute } from 'react-icons/go';
import { addDoc, collection } from 'firebase/firestore';
import { db } from 'src/firebase';
import { useAuth } from './../../hooks/useAuth';
import { AuthContext } from 'src/context/auth.context';
import { useRouter } from 'next/router';

export const Modal = () => {
	const { modal, setModal, currentMovie } = useInfoStore();
	const [trailer, setTrailer] = useState<string>('');
	const [muted, setMuted] = useState<boolean>(true);
	const [playing, setPlaying] = useState<boolean>(true);
	const [isLoading, setIsloading] = useState<boolean>(false);
	const { user } = useContext(AuthContext);
	const router = useRouter();
	const base_url = process.env.NEXT_PUBLIC_API_DOMAIN as string;
	const api_key = process.env.NEXT_PUBLIC_API_KEY as string;

	const api = `${base_url}/${currentMovie?.media_type === 'tv' ? 'tv' : 'movie'}/${
		currentMovie.id
	}/videos?api_key=${api_key}&language=en-US`;

	useEffect(() => {
		const fetchVideoData = async () => {
			const data = await fetch(api).then(res => res.json());

			if (data?.results) {
				const index = data.results.findIndex((el: Element) => el.type === 'Trailer');
				setTrailer(data?.results[index]?.key);
			}
		};
		fetchVideoData();

		// eslint-disable-next-line
	}, [currentMovie]);

	const addProductList = async () => {
		setIsloading(true);
		try {
			await addDoc(collection(db, 'list'), {
				userId: user?.uid,
				product: currentMovie,
			});
			setIsloading(false);
			router.replace(router.asPath);
		} catch (e) {
			console.error('Error adding document: ', e);
			setIsloading(false);
		}
	};

	const handleClose = () => {
		setModal(false);
	};

	return (
		<MuiModal
			open={modal}
			onClose={handleClose}
			className={'fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll scrollbar-hide'}
		>
			<>
				<button
					onClick={() => setModal(false)}
					className='modalButton absolute right-2 top-2 !z-40 h-9 w-9 border-none text-white  bg-[#181818cd]'
				>
					<AiOutlineClose className='text-white' />
				</button>
				<div className='relative pt-[55%]'>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${trailer}`}
						width={'100%'}
						height={'100%'}
						playing={playing}
						style={{ position: 'absolute', top: '0', left: '0' }}
						muted={muted}
					/>
					<div className='absolute bottom-4 left-2 flex w-full items-center justify-between px-18'>
						<div className='flex space-x-2'>
							<button
								onClick={() => setPlaying(prev => !prev)}
								className='flex items-center gap-x-2 rounded bg-white px-5 py-2 text-xs font-bold text-black transition hover:bg-[#e6e6e6]'
							>
								{playing ? (
									<>
										<BsFillPauseFill className='h-5 w-5 text-black' /> Pause
									</>
								) : (
									<>
										<BsFillPlayFill className='h-5 w-5 text-black' /> Play
									</>
								)}
							</button>
							<button className='modalButton' onClick={addProductList}>
								{isLoading ? '...' : <BsPlusLg className='w-5 h-5' />}
							</button>
							<button className='modalButton '>
								<AiOutlineLike className='w-5 h-5' />
							</button>
							<button className='modalButton' onClick={() => setMuted(prev => !prev)}>
								{muted ? <GoMute className='w-5 h-5' /> : <GoUnmute className='w-5 h-5' />}
							</button>
						</div>
					</div>
				</div>

				<div className='flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8'>
					<div className='space-y-6 text-lg'>
						<div className='flex items-center space-x-2 text-sm'>
							<p className='font-semibold text-green-400 '>{currentMovie?.vote_average * 10}% Match</p>
							<p className='font-light'>{currentMovie?.release_date}</p>
							<div className='flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs'>HD</div>
						</div>

						<div className='flex flex-col gap-x-10 gap-y-4 font-light md:flex-row'>
							<p className='w-5/6'>{currentMovie?.overview}</p>
							<div className='flex flex-col space-y-3 text-sm'>
								<div>
									<span className='text-[gray]'>Total votes:</span>
									{currentMovie?.vote_count}
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		</MuiModal>
	);
};
