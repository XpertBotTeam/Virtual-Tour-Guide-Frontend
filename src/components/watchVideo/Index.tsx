import React from 'react'
import NavBar from '../global/NavBar'
import Footer from '../global/Footer'
import YouTube from 'react-youtube';
import { useGetSingleTourQuery } from '@/app/api/toursSlice';

function Index({id}:{id:any}) {
    
    const {data,isFetching,isSuccess,error} = useGetSingleTourQuery(id.id)
    
  
  return (
    <div className='w-full h-[94vh]'>
        <NavBar/>
        {!isFetching && data?.tour.tour_video ?<div className='relative w-full h-full'>
            <YouTube videoId={data?.tour.tour_video} iframeClassName='video-container'/>
        </div>:<div>loading ...</div>}
        
        <Footer/>
    </div>
  )
}

export default Index