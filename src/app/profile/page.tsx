'use client'

import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/NavBar";
import AddPostForm from "@/components/profile/AddPostForm";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import React from "react";
import { ToursSlice } from "../api/toursSlice";
import PostsLogic from "@/components/profile/PostLogic/PostsLogic";

function page() {
  return (
    <ApiProvider api={ToursSlice}>
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

        <AddPostForm/>
        <PostsLogic/>

      </div>
      <div className="absolute bottom-0 w-full">
        
      </div>
      <Footer/>
    </div>
    </ApiProvider>
    
  );
}

export default page;
