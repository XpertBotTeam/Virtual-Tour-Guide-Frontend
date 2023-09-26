"use client";

import React from "react";
import NavBar from "../global/NavBar";
import Footer from "../global/Footer";
import { useGetSingleTourQuery } from "@/app/api/toursSlice";
import Explore3D from "./explore3D/Explore3D";
import TextInput from "../profile/TextInput";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";

function Index({ id }: { id: any }) {
  const { data, isLoading, isSuccess, error, isError } = useGetSingleTourQuery(
    id.id
  );

  console.log(data);
  
  return (
    <div>
      <NavBar />
      <div className="h-[90vh] flex flex-col justify-center items-center">
        <div className="font-serif ">
          <div className="flex justify-between items-center mb-4">
            <div className="w-full">
              <div className=" text-4xl text-black-text pb-4">
                {data?.tour.name}
              </div>
              <div className="bg-black w-full h-[1px]"></div>
              <div className="text-4xl text-black-text pt-4">
                {data?.tour.country}
              </div>
            </div>
            <div className="bg-red-600 rounded-lg w-40">
              
              <iframe
               allowFullScreen
               loading="lazy"
               className="rounded-md w-40"
               referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${data?.tour.latitude},${data?.tour.longtitude}&hl=es;&output=embed`}
              ></iframe>
            </div>
          </div>
          <div className="w-[50rem]">
            Lorem Ipsum Verbum Lorem Ipsum Verbum Lorem Ipsum Verbum Lorem Ipsum
            Verbum Lorem Ipsum Verbum Lorem Ipsum Verbum Lorem Ipsum Verbum
            Lorem Ipsum Verbum
          </div>
          <div>
            <Explore3D />
          </div>
          <ReviewForm id={id.id} />
          <Reviews/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;