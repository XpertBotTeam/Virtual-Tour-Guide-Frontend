"use client";

import React from "react";
import NavBar from "../global/NavBar";
import Footer from "../global/Footer";
import { useGetSingleTourQuery } from "@/app/api/toursSlice";
import Explore3D from "./explore3D/Explore3D";
import TextInput from "../profile/TextInput";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";
import Loading from "../global/loading/Loading";

function Index({ id }: { id: any }) {
  const { data, isLoading, isSuccess, error, isError } = useGetSingleTourQuery(
    id.id
  );

  
  return (
    <div>
      <NavBar />
      {isSuccess && data? <div className="min-[850px]:h-[90vh] max-[850px]:mt-8 max-[850px]:w-[90%] max-[850px]:m-auto flex flex-col justify-center items-center">
        <div className="font-serif ">
          <div className="flex justify-between items-center mb-4 max-[850px]:flex-col">
            <div className="w-full">
              <div className=" text-4xl text-black-text pb-4">
                {data?.tour.name}
              </div>
              <div className="bg-black w-full h-[1px]"></div>
              <div className="text-4xl text-black-text pt-4">
                {data?.tour.country}
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg w-40 max-[850px]:w-full">
              
              <iframe
               allowFullScreen
               loading="lazy"
               className="rounded-md w-40 max-[850px]:w-full"
               referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${data?.tour.latitude},${data?.tour.longtitude}&hl=es;&output=embed`}
              ></iframe>
            </div>
          </div>
          <div className="min-[850px]:w-[50rem]">
            Lorem Ipsum Verbum Lorem Ipsum Verbum Lorem Ipsum Verbum Lorem Ipsum
            Verbum Lorem Ipsum Verbum Lorem Ipsum Verbum Lorem Ipsum Verbum
            Lorem Ipsum Verbum
          </div>
          <div>
            <Explore3D id={id.id}/>
          </div>
          <ReviewForm id={id.id} />
          <Reviews/>
        </div>
      </div>:<div className='w-full h-[90vh] flex justify-center items-center'><Loading/></div>}
      <Footer />
    </div>
  );
}

export default Index;
