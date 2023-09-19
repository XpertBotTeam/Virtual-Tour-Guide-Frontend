"use client";

import {
  useDeletePostMutation,
  useUpdatePostMutation,
} from "@/app/api/toursSlice";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

function Index({
  data,
  refetch,
  categories,
}: {
  data: any;
  refetch: any;
  categories: any;
}) {
  const [
    deletePost,
    {
      data: PostData,
      isSuccess: PostSuccess,
      isError: PostIsError,
      error: PostError,
    },
  ] = useDeletePostMutation();
  const [
    updatePost,
    {
      isLoading: UpdateLoading,
      isSuccess: UpdateSuccess,
      data: UpdateData,
      error: UpdateError,
    },
  ] = useUpdatePostMutation();

  const deleteItem = (id: any) => {
    deletePost(id);
    setTimeout(() => {
      refetch();
    }, 700);
  };

  const [edit, setEdit] = useState(false);
  const [editedData, setEditedData] = useState(data);

  // Store the original data for each item
  const [originalData, setOriginalData]: any = useState({});

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setEditedData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (itemId: any) => {
    // Merge original data with edited data for the specific item
    const mergedData = {
      ...originalData[itemId],
      ...editedData,
      tour_video:`https://www.youtube.com/watch?v=${data.tour_video}`
    };
    console.log("Merged Data for Item ID", itemId, ":", mergedData);
    updatePost({id:itemId,data:mergedData})
    setEdit(false);
    setTimeout(()=>{
        refetch();
    },700)
  };

  return (
    <div className="p-4 bg-darker-div-bg mt-4 rounded-md">
      <div className="flex flex-col gap-4">
        {edit ? (
          <>
            <div>
              <input
                name="country"
                defaultValue={data.country}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                name="city"
                defaultValue={data.city}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                name="phone"
                defaultValue={data.phone}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                name="email"
                defaultValue={data.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                name="website"
                defaultValue={data.website}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                name="description"
                defaultValue={data.description}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                name="tour_video"
                defaultValue={`https://www.youtube.com/watch?v=${data.tour_video}`}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                name="rating"
                defaultValue={data.rating}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                name="price"
                defaultValue={data.price}
                onChange={handleInputChange}
              />
            </div>
            <button onClick={() => handleSubmit(data.id)}>submit</button>
          </>
        ) : (
          <>
            <div className="flex justify-between">
              <div>{data.name}</div>{" "}
              <button onClick={() => deleteItem(data.id)}>
                <FontAwesomeIcon icon={faX} />
              </button>
            </div>
            {categories.map((cat: any, index: any) => {
              if (categories.category_id === cat.id) {
                return <div key={index}>{cat.name}</div>;
              }
            })}
            <div>{data.country}</div>
            <div>{data.city}</div>
            <div>{data.phone}</div>
            <div>{data.email}</div>
            <div>{data.website}</div>
            <div>{data.description}</div>
            <div>https://www.youtube.com/watch?v={data.tour_video}</div>
            <div>{data.rating}</div>
            <div>{data.price}</div>
            <button onClick={() => setEdit(true)}>edit</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Index;
