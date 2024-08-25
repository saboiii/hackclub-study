import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='fixed w-screen h-28 overflow-hidden z-50'>
            <div className='flex flex-row w-full h-full items-center justify-between px-16'>
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