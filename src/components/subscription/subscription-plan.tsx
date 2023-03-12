import React from 'react'
import Image from 'next/image';
import { useAuth } from 'src/hooks/useAuth';
import {RiVipCrown2Line} from "react-icons/ri"
import {AiOutlineHourglass, AiOutlineVideoCameraAdd} from 'react-icons/ai'

export const SubscriptionPlan = () => {
    const {logout} = useAuth()
  return (
    <div className='min-h-screen'> 
    <div className="border-b-2 py-2 px-4 md:px-10 border-gray-300/20 flex items-center justify-between">
    <Image priority src={"/logo.svg"} alt={"Logo img"} width={56} height={56} className="object-contain cursor-pointer" />
    <div onClick={logout} className='cursor-pointer hover:underline'>Logout</div>
    </div>
        <div className="flex flex-col space-y-4 text-center pt-5">
        <h1 className='text-2xl md:text-5xl text-shadow-sm'>Flexible pricing for teams of any size.</h1>
        <p className="text-xl text-shadow">Relaxing with watching your favourite movies and tv</p>
        </div>
        <div className=" flex justify-center items-center py-20">
            <div className="gap-5 space-y-4 md:space-y-0 md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3">
                {/* {card plan} */}
                <div className="max-w-sm bg-white/10 px-6 pt-6 pb-2 cursor-pointer rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                    <h3 className="mb-3 text-xl font-bold text-[#be264c]">Starter</h3>
                    <div className="relative">
                        {/* eslint-disable-next-line */}
                        <img className='w-full rounded-xl' src='https://images.unsplash.com/photo-1571715268998-d6e79bed5fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80' alt="card img" />
                        <p className="absolute top-0 bg-black/90 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">$ 10</p>
                        <div className="absolute rounded-xl left-0 top-0 bg-black/20 h-full w-full"></div>
                    </div>
                    <div className="border border-white/20 mt-4"></div>
                    <button className='mt-4 text-center font-semibold text-xl w-full py-4 bg-[#be264c] rounded hover:opacity-80'>BUY PLAN</button>
                    <div className="my-4 flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                            <RiVipCrown2Line className='h-5 w-5' />
                            <p>VIP plan.</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <AiOutlineHourglass className='h-5 w-5' />
                            <p>100 hour video</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <AiOutlineVideoCameraAdd className='h-5 w-5' />
                            <p>HD Format</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm bg-white/10 px-6 pt-6 pb-2 cursor-pointer rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                    <h3 className="mb-3 text-xl font-bold text-[#be264c]">Starter</h3>
                    <div className="relative">
                        {/* eslint-disable-next-line */}
                        <img className='w-full rounded-xl' src='https://avatars.mds.yandex.net/i?id=556ee4d56412403b23920593caa3ac4a1bb536a0-8313048-images-thumbs&n=13' alt="card img" />
                       
                        <p className="absolute top-0 bg-black/90 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">$ 10</p>
                        <div className="absolute rounded-xl left-0 top-0 bg-black/20 h-full w-full"></div>
                    </div>
                    <div className="border border-white/20 mt-4"></div>
                    <button className='mt-4 text-center font-semibold text-xl w-full py-4 bg-[#be264c] rounded hover:opacity-80'>BUY PLAN</button>
                    <div className="my-4 flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                            <RiVipCrown2Line className='h-5 w-5' />
                            <p>VIP plan.</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <AiOutlineHourglass className='h-5 w-5' />
                            <p>100 hour video</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <AiOutlineVideoCameraAdd className='h-5 w-5' />
                            <p>HD Format</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm bg-white/10 px-6 pt-6 pb-2 cursor-pointer rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                    <h3 className="mb-3 text-xl font-bold text-[#be264c]">Starter</h3>
                    <div className="relative">
                        {/* eslint-disable-next-line */}
                        <img className='w-full rounded-xl' src='https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' alt="card img" />
                        <p className="absolute top-0 bg-black/90 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">$ 10</p>
                        <div className="absolute rounded-xl left-0 top-0 bg-black/20 h-full w-full"></div>
                    </div>
                    <div className="border border-white/20 mt-4"></div>
                    <button className='mt-4 text-center font-semibold text-xl w-full py-4 bg-[#be264c] rounded hover:opacity-80'>BUY PLAN</button>
                    <div className="my-4 flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                            <RiVipCrown2Line className='h-5 w-5' />
                            <p>VIP plan.</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <AiOutlineHourglass className='h-5 w-5' />
                            <p>100 hour video</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <AiOutlineVideoCameraAdd className='h-5 w-5' />
                            <p>HD Format</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
