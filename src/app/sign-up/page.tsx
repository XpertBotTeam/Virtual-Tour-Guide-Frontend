"use client";

import React, { useState } from "react";
import NavBar from "@/components/global/NavBar";
import Footer from "@/components/global/Footer";
import Index from "@/components/signUp/Index";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { usersApi } from "../api/UsersSlice";

function page() {
  return (
    <ApiProvider api={usersApi}>
      <div className=" text-white">
        <NavBar />
        <Index />
        <Footer />
      </div>
    </ApiProvider>
  );
}

export default page;
