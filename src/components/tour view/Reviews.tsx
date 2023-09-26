import Image from "next/image";
import React from "react";

function Reviews() {
  const reviews = [
    {
      username: "hadi",
      review: "hello world",
    },
    {
      username: "hadi",
      review: "hello world",
    },
    {
      username: "hadi",
      review: "hello world",
    },
    {
      username: "hadi",
      review: "hello world",
    },
  ];
  return (
    <div>
        <h1 className="text-2xl text-black-text font-semibold font-sans">Reviews</h1>
        <div className="h-56 overflow-y-scroll mt-8">
        
          {reviews.map((review, index) => {
            return (
              <div key={index} className="p-4 flex  items-center gap-4">
                <div className="w-12 h-12 bg-olive-green rounded-full flex justify-center items-center">
                  prof
                </div>
                <div className="flex flex-col gap-1"><div>{review.username}</div> <div>{review.review}</div></div>
              </div>
            );
          })}
        </div>
    </div>
  );
}

export default Reviews;
