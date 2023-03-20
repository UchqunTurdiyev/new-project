import React from 'react';

export default function MemberShipPan() {
	return (
		<div className='mt-6 grid grid-cols-1 gap-x-4 border p-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0'>
			<div className='space-y-6 py-4'>
				<h4 className='text-lg text-slate-400'>Membership & Billing</h4>
				<button className='h-10 w-3/5 whitespace-nowrap bg-gray-300 py-2 text-sm font-medium text-black shadow-md hover:bg-gray-200 md:w-4/5'>
					Cencel Membership
				</button>
			</div>
			<div className='col-span-3'>
				<div className='flex flex-col justify-between border-b border-white/10 py-4 md:flex-row'>
					<div>
						<p className='font-medium'>info@gamil.com</p>
						<p className='text-slate-400'>Password: ******</p>
					</div>
					<div className='md:text-right'>
						<p className={'membership_link'}>Change email</p>
						<p className={'membership_link'}>Change password</p>
					</div>
				</div>
				<div className='flex flex-col justify-between py-4 md:flex-row md:pb-0'>
					<div>
						<p>Your membership plan will end 14 March 2023</p>
					</div>
					<div className='md:text-right'>
						<p className='membership_link'>Manage payment info</p>
						<p className='membership_link'>Add backup payment method</p>
						<p className='membership_link'>Billing detail</p>
						<p className='membership_link'>Change billing day</p>
					</div>
				</div>
			</div>
		</div>
	);
}
