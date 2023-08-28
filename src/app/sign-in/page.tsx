"use client"

import Footer from '@/components/global/Footer'
import NavBar from '@/components/global/NavBar'
import Index from '@/components/signIn/Index'
import React from 'react'
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { usersApi } from "../api/UsersSlice";

function page() {
  return (
    <ApiProvider api={usersApi}>
      <div className='h-screen text-white'>
        <NavBar/>
        <div className='h-3/4 flex flex-col gap-4 justify-center items-center '>
        <h1 className='text-3xl font-bold'>Sign In</h1>
            <Index/>
        </div>
        <Footer/>
    </div>
    </ApiProvider>
    
  )
}

export default page