'use client'

import Index from "@/components/Tours/Index";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import React from "react";
import { ToursSlice } from "../api/toursSlice";

function page() {
  return (
    <ApiProvider api={ToursSlice}>
      <Index />
    </ApiProvider>
  );
}

export default page;
