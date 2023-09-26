'use client'

import { useCreateCategoryMutation, useCreateReviewMutation } from "@/app/api/toursSlice";
import React from "react";

function ReviewForm({id}:{id:any}) {

    const [createReview,{isLoading,data,isSuccess,error}] = useCreateReviewMutation()

    const send=()=>{
      createReview({id:id,data:{description:'hello lakfsdjh lsakdjfh laskdjfh lkjaslkj fh'}})
    }
  return (
    <div className="mt-4">
      <div className="mb-4 w-full">
        <div className="relative font-sans flex justify-center items-center gap-4">
          <input
            type="text"
            id="review"
            className="bg-gray-50 border border-gray-300 text-black-text text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
            placeholder="what do you think..."
          />
          <div onClick={send} className="bg-olive-green hover:bg-hover-olive-green hover:cursor-pointer px-6 py-2 rounded-md transition-all duration-300 text-white">
            submit
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
