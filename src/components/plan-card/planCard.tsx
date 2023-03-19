import React from 'react';
import { PlanCardProps } from './plan-card.props';
import { RiVipCrown2Line } from 'react-icons/ri';
import { AiOutlineHourglass, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { AuthContext } from 'src/context/auth.context';
import { useContext, useState } from 'react';

export const PlanCard = ({ product }: PlanCardProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { user } = useContext(AuthContext);

	const onSubmitSubscription = async (priceId: string) => {
		setIsLoading(true);
		const payload = { email: user?.email, priceId };

		try {
			const response = await fetch('/api/subscription', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});
			const data = await response.json();
			window.open(data.subscription.url);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
		}
	};
	return (
		<div
			key={product.id}
			className='max-w-sm bg-white/10 px-6 pt-6 pb-2 cursor-pointer rounded-xl shadow-lg transform hover:scale-105 transition duration-500'
		>
			<h3 className='mb-3 text-xl font-bold text-[#be264c]'>{product.name}</h3>
			<div className='relative'>
				{/* eslint-disable-next-line */}
				<img className='w-full rounded-xl' src={product.images[0]} alt='card img' />
				<p className='absolute top-0 bg-black/90 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg'>
					{(product.default_price.unit_amount / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
				</p>
				<div className='absolute rounded-xl left-0 top-0 bg-black/20 h-full w-full'></div>
			</div>
			<div className='border border-white/20 mt-4'></div>
			<button
				onClick={() => onSubmitSubscription(product.default_price.id)}
				className='mt-4 text-center font-semibold text-xl w-full py-4 bg-[#be264c] rounded hover:opacity-80'
				disabled={isLoading}
			>
				{isLoading ? 'Loading...' : 'BUY PLAN'}
			</button>
			<div className='my-4 flex flex-col space-y-2'>
				{product.metadata.adv.split(', ').map((c, id) => (
					<div key={id} className='flex items-center space-x-2'>
						{id == 0 && <RiVipCrown2Line className='h-5 w-5' />}
						{id == 1 && <AiOutlineHourglass className='h-5 w-5' />}
						{id == 2 && <AiOutlineVideoCameraAdd className='h-5 w-5' />}

						<p>{c}.</p>
					</div>
				))}
			</div>
		</div>
	);
};
