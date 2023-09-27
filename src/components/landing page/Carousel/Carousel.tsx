"use client";

import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import "./carousel.css";
import Link from "next/link";

function Carousel() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1496823407868-80f47c7453b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2113&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1521327895744-46e309d005b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1572696442982-293077e0a9c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1558980123-68cbc932a371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1582716207913-54a7913db841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const element: any = document.querySelector(".animate");
    element.classList.remove("element");
    setTimeout(() => {
      element.classList.add("element");
    }, 10);
    setTimeout(() => {
      nextSlide();
    }, 10000);
  }, [currentIndex]);

  console.log(currentIndex);

  return (
    <div className="w-full h-[94vh]  m-auto relative group ">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url}) ` }}
        className={`h-full w-full bg-center bg-cover duration-1000 animate relative flex flex-col justify-center items-start`}
      >
        {" "}
        <div className="absolute max-[860px]:ml-24 max-[590px]:ml-12 ml-52 mb-36 flex flex-col gap4">
          {" "}
          <h2 className="text-8xl max-[1300px]:text-5xl max-[590px]:text-3xl  font-semibold text-white">Welcome To </h2>
          <h1 className="text-9xl max-[1300px]:text-6xl max-[590px]:text-4xl font-semibold text-white">LEBANON</h1>{" "}
          <Link
            href={"tours"}
            className="text-4xl max-[1300px]:text-lg max-[590px]:text-base  px-4 py-2 bg-olive-green hover:bg-hover-olive-green  text-white rounded-md w-1/2 max-[590px]:w-3/4 transition-all duration-300"
          >
            Explore More
          </Link>
        </div>
      </div>
      {/* Left Arrow */}

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {/* <div className='flex top-4 justify-center py-2 absolute bottom-0 '>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer '
          >
            <RxDotFilled className='text-white'/>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Carousel;
