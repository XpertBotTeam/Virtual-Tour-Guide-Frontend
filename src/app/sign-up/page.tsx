import NavBar from '@/components/global/NavBar'
import Footer from '@/components/global/Footer'
import Index from '@/components/signUp/Index'
import React from 'react'

function page() {
  return (
    <div className='h-screen text-white'>
        <NavBar/>
        <div className='h-3/4 flex flex-col gap-4 justify-center items-center '>
          <h1 className='text-3xl font-bold'>Sign Up</h1>
            <Index/>
        </div>
        <Footer/>
    </div>
  )
}

export default page