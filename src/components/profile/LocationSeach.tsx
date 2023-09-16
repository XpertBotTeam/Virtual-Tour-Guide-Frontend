// LocationSearch.js

import React, { useState, useEffect } from "react";
import TextInput from "./TextInput";

interface AddressInfo {
  display_name: string;
  lat: string;
  lon: string;
}

const LocationSearch = ({ title, value, setLocationData }: any) => {
  const [address, setAddress] = useState<string>("");
  const [addressArr, setAddressArr] = useState<AddressInfo[]>([]);
  const [resultsText, setResultsText] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    // Function to fetch address data based on input
    const fetchAddress = async () => {
      if (address.trim() === "") {
        setAddressArr([]); // Clear suggestions when input is empty
        return;
      }

      const url = `https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${address}`;

      try {
        const response = await fetch(url, { signal });

        if (response.ok) {
          const data = await response.json();
          setAddressArr(data);
        } else {
          setAddressArr([]);
        }
      } catch (error) {
        console.error(error);
        setAddressArr([]);
      }
    };

    const debounceTimer = setTimeout(fetchAddress, 500);

    return () => {
      // Cancel the ongoing fetch when the component unmounts or when a new request is made
      abortController.abort();
      clearTimeout(debounceTimer);
    };
  }, [address]);

  const setAttributs = (element: AddressInfo) => {
    setLocationData(element);
    console.log(element)
    setAddress(element.display_name); // Set the input value to the selected location
    setAddressArr([])
  };

  useEffect(() => {
    // Show suggestions when the addressArr changes
    if (addressArr.length > 0) {
      setResultsText(
        <div className="bg-white flex flex-col gap-2">
          {addressArr.map((element, index) => (
            <div
              className="p-2 hover:cursor-pointer hover:bg-neutral-300"
              key={index}
              onClick={() => setAttributs(element)}
            >
              {element.display_name}
            </div>
          ))}
        </div>
      );
    } else if (addressArr.length === 0) {
      setResultsText(<div></div>);
    }
  }, [addressArr]);

  useEffect(() => {
    if (address === "") {
      setAddressArr([]);
    }
  }, [address]);

  return (
    <div className="container mb-4">
      <label
        htmlFor="location"
        className="block mb-2 text-sm font-medium text-black-text "
      >
        {title}
      </label>
      <div className="relative">
        <input
          type="text"
          placeholder="address"
          value={address}
          id="location"
          onChange={(e) => setAddress(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-black-text text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
        />

        <div id="results">{resultsText}</div>
      </div>
    </div>
  );
};

export default LocationSearch;

