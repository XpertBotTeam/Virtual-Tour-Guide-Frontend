import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div className='w-full p-4 bg-light-dark flex justify-between items-center'>
        <div><Image src={"/virtualPng.png"} height={50} width={50} alt='logo'/> </div>
        <div className='flex justify-center items-center gap-4 '>
            <Link href={"/sign-in"}>Sign In</Link>
            <Link href={"/sign-up"}>Sign Up</Link>
        </div>
    </div>
  )
}

export default NavBar