import Link from 'next/link'
import React from 'react'
import { RiNextjsFill } from 'react-icons/ri'


const Navbar = () => {
  return (
    <>
        <nav className='w-full h-16 bg-zinc-500 fixed py-10  text-white flex items-center justify-between  px-25'>
        <Link href="/" className='transition duration-300 hover:scale-110'>
         <RiNextjsFill className='w-16 h-16'></RiNextjsFill>
        </Link>
           <ul className='flex gap-10 text-lg'>
           <Link href="/" className='transition duration-300 hover:scale-110'>
             Home
           </Link>
           <Link href="/about" className='transition duration-300     hover:scale-110'>
             About
           </Link>
           <Link href="/contact" className='transition duration-300 hover:scale-110'>
             Contact
           </Link>
            <Link href="/products" className='transition duration-300 hover:scale-110'>
             Products
           </Link>
           </ul>
         </nav>
    </>
  )
}

export default Navbar