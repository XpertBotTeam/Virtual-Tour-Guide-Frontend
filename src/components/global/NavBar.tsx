import Cookies from 'js-cookie'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div className='w-full p-2 px-4  flex justify-between items-center  bg-olive-green text-white'>
        <Link href={"/"}><Image src={"/virtualPng.png"} height={40} width={40} alt='logo'/> </Link>
        <div className='flex justify-center items-center gap-4 '>
            <Link href={"/sign-in"} className='hover:underline'>Sign In</Link>
            <Link href={"/sign-up"} className='bg-light-olive-green hover:bg-hover-light-olive-green transition-all duration-300 py-2 px-4 text-[#657a42] rounded-md'>Sign Up</Link>
        </div>
    </div>
  )
}

export default NavBar