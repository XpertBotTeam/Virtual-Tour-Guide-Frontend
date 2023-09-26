import React from "react";
import NavBar from "../global/NavBar";
import { useGetCategoriesQuery, useGetToursQuery } from "@/app/api/toursSlice";
import SearchBar from "./components/SearchBar";
import TourCard from "./components/tour card/TourCard";

function Index() {
  const {
    data: Categories,
    isLoading: CatLoading,
    isSuccess: CatSuccess,
    isError: CatIsError,
    error: CatError,
  } = useGetCategoriesQuery({});

  const {
    data: Tours,
    isLoading: ToursLoading,
    isSuccess: ToursSuccess,
    isError: ToursIsError,
    error: ToursError,
  } = useGetToursQuery({});


 


  return (
    <div>
      <NavBar />
      <div className="bg-neutral-100 p-2">
        <div className="w-96">
          <SearchBar />
        </div>
      </div>
      {ToursSuccess && Tours?.tours.data && <div className="flex flex-wrap">
        {Tours?.tours.data.map((tour:any, index:number) => {
          return <TourCard key={index} tour={tour}/>;
        })}
      </div>}
    </div>
  );
}

export default Index;
