import NavBar from '@/components/NavBar'
import Footer from '@/components/global/Footer'
import Index from '@/components/signUp/Index'
import React from 'react'

function page() {
  return (
    <div className='h-screen text-white'>
        <NavBar/>
        <div className='h-3/4 flex justify-center items-center '>
            <Index/>
        </div>
        <Footer/>
    </div>
  )
}

export default page