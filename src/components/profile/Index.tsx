'use client'

import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/NavBar";
import AddPostForm from "@/components/profile/AddPostForm";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import PostsLogic from "@/components/profile/PostLogic/PostsLogic";

function Index() {

  const [addVideo,setAddVideo] = useState(false)
  return (

      <div className="flex flex-col gap-4">
      <NavBar />
      <div className="w-1/2 mt-20 m-auto">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-olive-green flex justify-center items-center text-white">
            profile
          </div>
          <div className="flex flex-col ">
            <div className="flex  items-center gap-2">
              Lorem Ipsum <FontAwesomeIcon icon={faEdit} className="w-4" />
            </div>
            <div className="flex  items-center gap-2">
              LoremIpsum@gmail.com{" "}
              <FontAwesomeIcon icon={faEdit} className="w-4" />
            </div>
          </div>
        </div>

        <button className="mt-4 px-6 py-2 bg-olive-green text-white rounded-md" onClick={()=>setAddVideo(!addVideo)}>add Video</button>
        {addVideo&&<AddPostForm/>}
        
        <PostsLogic/>

      </div>
      <div className={`${!addVideo&& 'absolute bottom-0'} w-full`}>
        <Footer/>
      </div>
      
    </div>
    
  );
}

export default Index;
