import React from 'react';
import Image from 'next/image';
import { MdReportGmailerrorred } from 'react-icons/md';
import Link from 'next/link';

export default function Cancel() {
	return (
		<>
			<div className='relative w-full h-screen'>
				<Image fill className='w-full h-auto object-cover' src={'https://i.gifer.com/NvN.gif'} alt='success' />
				<div className='absolute w-full h-[90vh] flex flex-col justify-center items-center'>
					<Image
						priority
						src={'/logo.svg'}
						alt={'Logo img'}
						width={56}
						height={56}
						className='object-contain cursor-pointer absolute left-2 top-2'
					/>
					<MdReportGmailerrorred className='w-20 h-20 text-red-600' />
					<h1 className='text-2xl md:text-5xl mt-4'>Canceled Subscription</h1>
					<Link href={'/'}>
						<button className='mt-6 bg-red-600 hover:bg-red-500 py-4 px-6 rounded'>Choose Plan</button>
					</Link>
				</div>
			</div>
		</>
	);
}
