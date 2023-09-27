import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function TourCard({tour}:{tour:any}) {
  const [show, setShow] = useState(false);

  console.log(tour)

  return (
    <Link
      onMouseOverCapture={() => setShow(true)}
      onMouseOutCapture={() => setShow(false)}
      href={`tour/${tour.id}`}
      className="w-1/5 max-[900px]:w-1/3 max-[700px]:w-full  h-60 relative overflow-hidden text-white"
    >
      <div>
        <Image
          alt="image"
          width={1000}
          height={1000}
          src={
            "https://images.unsplash.com/photo-1596607808481-495f70aa5b26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          }
          className="absolute w-full top-0 -z-10"
        />
        <div className="absolute bottom-4 left-4 font-serif text-lg ">
          <div
            className={`${
              !show && "translate-y-8"
            } transition-all duration-500`}
          >
            {tour.name}
          </div>
          <div
            className={`${
              !show && "translate-y-12"
            } transition-all duration-500`}
          >
            {tour.description}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TourCard;
