import React from "react";
import NavBar from "../global/NavBar";
import { useGetCategoriesQuery } from "@/app/api/toursSlice";
import SearchBar from "./components/SearchBar";
import TourCard from "./components/tour card/TourCard";

function Index() {
  const {
    data: Categories,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCategoriesQuery({});
  const tours= [
    1,2,3,4,5,6,7
  ]

  return (
    <div>
      <NavBar />
      <div className="bg-neutral-100 p-2">
        <div className="w-96">
            <SearchBar/>
        </div>
        
      </div>
      <div className="flex flex-wrap">
        {tours.map((tour,index)=>{
            return <TourCard key={index}/>
        })}
      </div>
    </div>
  );
}

export default Index;
