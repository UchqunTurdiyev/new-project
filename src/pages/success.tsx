import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Success() {
	return (
		<>
			<div className='w-full h-screen relative'>
				<Image
					fill
					className='w-full h-auto object-cover '
					src={'https://i.pinimg.com/originals/70/a5/52/70a552e8e955049c8587b2d7606cd6a6.gif'}
					alt='success'
				/>
				<div className='absolute left-5 top-3'>
					<Image priority src={'/logo.svg'} alt={'Logo img'} width={56} height={56} className='object-contain cursor-pointer' />
				</div>
				<div className='absolute bottom-14 left-[50%] translate-x-[-50%]'>
					<h1 className='text-2xl md:text-5xl mt-4'>Success Subscription</h1>
					<Link href={'/'}>
						<button className='mt-6 md:ml-36 bg-green-600 hover:bg-green-500 py-4 px-6 rounded'>Dashboard</button>
					</Link>
				</div>
			</div>
		</>
	);
}
