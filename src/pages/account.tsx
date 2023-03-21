import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import { MdSubscriptions } from 'react-icons/md';
import MemberShipPan from 'src/components/membership/Membership-plan';
import { Subscription } from 'src/interfaces/app.interfaces';
import { API_REQUEST } from './../services/api.services';
import moment from 'moment';

export default function account({ subscription }: AccountProps) {
	console.log(subscription);

	return (
		<>
			<Head>
				<title>Account settings</title>
				<meta name='description' content='Configurate your account' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<header>
				<div className='flex items-center space-x-2 md:space-x-10'>
					<Link href={'/'}>
						<Image priority src={'/logo.svg'} alt={'Logo img'} width={56} height={56} className='object-contain cursor-pointer' />
					</Link>
				</div>
				<div className='flex items-center space-x-2 font-light text-sm cursor-pointer'>
					<Link href={'account'}>
						<FiUser className='h-6 w-6 cursor-pointer' />
					</Link>
				</div>
			</header>

			<main className='mx-auto max-w-6xl px-5 pt-24 pb-12 transition-all md:px-10'>
				<div className='flex flex-col gap-x-4 md:flex-row md:items-center'>
					<h1 className='text-3xl md:text-4xl'>Account</h1>
					<div className='-ml-1 flex items-center gap-x-1.5'>
						<MdSubscriptions className='h-5 w-5 text-red-600' />
						<p className='text-md font-semibold text-slate-500'>
							Member since {moment(subscription.current_period_start * 1000).format('DD MMMM, YYYY')}
						</p>
					</div>
				</div>
				<MemberShipPan subscription={subscription} />

				<div className='mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0'>
					<h4 className='text-lg text-slate-400'>Plan Details</h4>
					<div className='col-span-2 font-medium'>{subscription.plan.nickname}</div>
					<p className='cursor-pointer text-blue-500 hover:underline md:text-right'>Change Plan</p>
				</div>

				<div className='mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0'>
					<h4 className='text-lg text-slate-400'>Settings</h4>
					<p className='col-span-3 cursor-pointer text-blue-500 hover:underline'>Sign out of all devices</p>
				</div>
			</main>
		</>
	);
}

// SERVISE SITE RENDERING
export const getServerSideProps: GetServerSideProps<AccountProps> = async ({ req }) => {
	const user_id = req.cookies.user_id;

	if (!user_id) {
		return {
			redirect: { destination: '/auth', permanent: false },
		};
	}
	const subscription = await fetch(`${API_REQUEST.subscription}/${user_id}`).then(res => res.json());

	return {
		props: {
			subscription: subscription.subscription.data[0],
		},
	};
};

interface AccountProps {
	subscription: Subscription;
}
