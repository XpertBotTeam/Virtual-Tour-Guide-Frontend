'use client'

import { ToursSlice, useGetSingleTourQuery } from '@/app/api/toursSlice'
import Index from '@/components/watchVideo/Index'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import React from 'react'

function page({ params }: { params: { slug: string } }) {
    
    
  
  return (
    <ApiProvider api={ToursSlice}>
        <Index id={params}/>
    </ApiProvider>
  )
}

export default page