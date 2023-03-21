import React from 'react';
import { MembershipPLanProps } from './membership-plan.props';
import moment from 'moment';
import { useState } from 'react';

export default function MemberShipPan({ subscription }: MembershipPLanProps) {
	const [isLoading, setIsLoading] = useState(false);
	const openPortal = async () => {
		setIsLoading(true);
		const payload = { user_id: subscription.customer.metadata.user_id };
		const respons = await fetch('/api/subscription/manage', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});
		const data = await respons.json();
		console.log(data);
		window.open(data.portal);
		setIsLoading(false);
	};
	console.log(subscription);

	return (
		<div className='mt-6 grid grid-cols-1 gap-x-4 border p-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0'>
			<div className='space-y-6 py-4'>
				<h4 className='text-lg text-slate-400'>Membership & Billing</h4>
				<button
					onClick={openPortal}
					className='h-10 w-3/5 whitespace-nowrap bg-gray-300 py-2 text-sm font-medium text-black shadow-md hover:bg-gray-200 md:w-4/5'
				>
					{isLoading ? 'Loading...' : 'Cencel Membership'}
				</button>
			</div>
			<div className='col-span-3'>
				<div className='flex flex-col justify-between border-b border-white/10 py-4 md:flex-row'>
					<div>
						<p className='font-medium'>{subscription.customer.email}</p>
						<p className='text-slate-400'>Password: ******</p>
					</div>
					<div className='md:text-right'>
						<p className={'membership_link'}>Change email</p>
						<p className={'membership_link'}>Change password</p>
					</div>
				</div>
				<div className='flex flex-col justify-between py-4 md:flex-row md:pb-0'>
					<div>
						<div className='flex items-center gap-2'>
							<span className='py-1 px-3 uppercase bg-white/20 rounded'>
								{subscription.default_payment_method
									? subscription.default_payment_method.card.brand
									: subscription.customer.invoice_settings.default_payment_method.card.brand}
							</span>
							**** **** ****{' '}
							{subscription.default_payment_method
								? subscription.default_payment_method.card.last4
								: subscription.customer.invoice_settings.default_payment_method.card.last4}
						</div>
						<p className='mt-4'>
							Your next billing date is {moment(subscription.current_period_end * 1000).format('DD MMMM, YYYY')}
						</p>
					</div>
					<div className='md:text-right'>
						{isLoading ? (
							'Loading...'
						) : (
							<>
								<p onClick={openPortal} className='membership_link'>
									Manage payment info
								</p>
								<p onClick={openPortal} className='membership_link'>
									Add backup payment method
								</p>
								<p onClick={openPortal} className='membership_link'>
									Billing detail
								</p>
								<p onClick={openPortal} className='membership_link'>
									Change billing day
								</p>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
