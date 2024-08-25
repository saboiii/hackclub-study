import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    function handleNav() {
        setNav(!nav);
    }

    return (
        <div className='fixed w-screen md:h-28 overflow-hidden z-50'>
            <div className='fixed flex h-20 md:hidden flex-row w-full justify-start items-center px-10 z-50'>
                <RxHamburgerMenu size={24} className='hover:text-blue-300 ease-in-out duration-300' onClick={handleNav} />
            </div>
            <div className={nav ? 'hidden' : 'fixed flex md:hidden w-[75vw] h-screen bg-[#111111] z-40 px-12 py-24'}>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-col w-full items-center font-normal text-[10px] mt-10'>
                        <Link href='/' className='hover:text-blue-300 ease-in-out duration-300 flex mb-12 text-sm' onClick={handleNav} >HOME</Link>
                        <Link href='/' className='hover:text-blue-300 ease-in-out duration-300 flex mb-12 text-sm' onClick={handleNav} >ABOUT</Link>
                        <Link href='/' className='hover:text-blue-300 ease-in-out duration-300 flex mb-12 text-sm' onClick={handleNav} >CONTACT</Link>
                    </div>
                </div>
            </div>
            <div className='hidden md:flex flex-row w-full h-full items-center justify-between px-16'>
                <div className='flex'>
                    <Image
                        alt='Website logo.'
                        priority={true}
                        src='/logo.png'
                        width={100}
                        height={100}
                        className='w-20 -translate-y-[3px]'
                    />
                </div>
                <div className='flex gap-8 font-normal text-[10px]'>
                    <Link href='/' className='hover:text-red-400 ease-in-out duration-300'>HOME</Link>
                    <Link href='/' className='hover:text-red-400 ease-in-out duration-300'>ABOUT</Link>
                    <Link href='/' className='hover:text-red-400 ease-in-out duration-300'>CONTACT</Link>
                </div>
                <div className='button1 font-normal outline-1 outline-white px-4'>
                    Subscribe
                </div>
            </div>
        </div>
    )
}

export default Navbar