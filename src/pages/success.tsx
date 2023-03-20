import React from 'react';
import Image from 'next/image';

export default function Success() {
	return (
		<div>
			<div className='w-full h-screen relative'>
				<Image
					fill
					className='w-full h-auto object-cover'
					src={'https://i.pinimg.com/originals/70/a5/52/70a552e8e955049c8587b2d7606cd6a6.gif'}
					alt='success'
				/>
				<div className='absolute left-5 top-3'>
					<Image priority src={'/logo.svg'} alt={'Logo img'} width={56} height={56} className='object-contain cursor-pointer' />
				</div>
			</div>
		</div>
	);
}
