import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function TourCard() {
  const [show, setShow] = useState(false);

  return (
    <Link
      onMouseOverCapture={() => setShow(true)}
      onMouseOutCapture={() => setShow(false)}
      href={"tour/1"}
      className="w-1/5  h-60 relative overflow-hidden text-white"
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
            this is beirut
          </div>
          <div
            className={`${
              !show && "translate-y-12"
            } transition-all duration-500`}
          >
            come visit the best country in the world
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TourCard;
