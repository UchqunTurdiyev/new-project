import React,{ useState, useEffect } from 'react'
import Image from 'next/image';
import {FiUser} from "react-icons/fi"
import {AiOutlineSearch, AiOutlineLogout} from "react-icons/ai"
import {BiBellMinus} from "react-icons/bi"
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from './../../context/auth.context';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const {logout} = useContext(AuthContext)

  // start scroll effects 
  useEffect(() => {
    const handleScrool = () => {
      if(window.scrollY > 0) {
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScrool)

    return () => window.removeEventListener("scroll", handleScrool)
  }, [])
  // end scroll effects


  return (
    <header className={`${scrolled && 'bg-[#be264c]'}`}>
        <div className='flex items-center space-x-2 md:space-x-10'>
            <Image priority src={"/logo.svg"} alt={"Logo img"} width={56} height={56} className="object-contain cursor-pointer" />
            <ul className='space-x-4 md:flex hidden'>
                <li className='navLink'>Home</li>
                <li className='navLink'>Movies</li>
                <li className='navLink'>TV</li>
                <li className='navLink'>New</li>
                <li className='navLink'>Popular</li>
            </ul>
        </div>
         <div className="flex items-center space-x-2 font-light text-sm cursor-pointer">
            <AiOutlineSearch className='h-6 w-6 cursor-pointer'/>
            <p className='hidden lg:inline'>Kids</p>
            <BiBellMinus className='h-6 w-6 cursor-pointer'/>
            <Link href={"account"}>
            <FiUser className='h-6 w-6 cursor-pointer'/>
            </Link>
            <AiOutlineLogout className='h-6 w-6 cursor-pointer' onClick={logout}/>
         </div>
    </header>
  )
}
