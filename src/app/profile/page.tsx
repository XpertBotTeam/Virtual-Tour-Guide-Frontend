'use client'

import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/NavBar";
import AddPostForm from "@/components/profile/AddPostForm";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import React, { useState } from "react";
import { ToursSlice } from "../api/toursSlice";
import PostsLogic from "@/components/profile/PostLogic/PostsLogic";
import Index from "@/components/profile/Index";

function page() {


  return (
    <ApiProvider api={ToursSlice}>
      <Index/>
    </ApiProvider>
    
  );
}

export default page;
