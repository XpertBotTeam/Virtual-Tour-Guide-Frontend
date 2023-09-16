import {
    useDeletePostMutation,
    useGetAdminPostsQuery,
  } from "@/app/api/toursSlice";
  import { faX } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React, { useState, useEffect } from "react";
  
  function Index() {
    const { isLoading, isSuccess, data, error, isError, refetch } =
      useGetAdminPostsQuery({});
    const [
      deletePost,
      {
        data: PostData,
        isSuccess: PostSuccess,
        isError: PostIsError,
        error: PostError,
      },
    ] = useDeletePostMutation();
  
    const tours = data?.tours.data;
  
    const deleteItem = (id: any) => {
      deletePost(id);
      setTimeout(() => {
        refetch();
      }, 700);
    };
  
    const [edit, setEdit] = useState(false);
    const [editedData, setEditedData] = useState({
      country: "",
      city: "",
      phone: "",
      email: "",
      website: "",
      description: "",
      tour_video: "",
      rating: "",
      price: "",
    });
  
    // Store the original data for each item
    const [originalData, setOriginalData]:any = useState({});
  
    useEffect(() => {
      if (isSuccess && tours) {
        const originalDataMap:any = {};
        tours.forEach((item:any) => {
          originalDataMap[item.id] = { ...item };
        });
        setOriginalData(originalDataMap);
      }
    }, [isSuccess, tours]);

   
  
    const handleInputChange = (event: any) => {
      const { name, value } = event.target;
      setEditedData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (itemId:any) => {
        // Merge original data with edited data for the specific item
        const mergedData = {
          ...originalData[itemId],
          ...editedData,
        };
        console.log("Merged Data for Item ID", itemId, ":", mergedData);
        setEdit(false);
      };

      
  
    return (
      <div className="p-4 bg-darker-div-bg mt-4 rounded-md">
        {isSuccess &&
          tours.map((item: any, index: any) => {
            return (
              <div key={index} className="flex flex-col gap-4">
                {edit ? (
                   <>
                   <div>
                     <input
                       name="country"
                       defaultValue={item.country}
                       onChange={handleInputChange}
                     />
                   </div>
                   <div>
                     <input
                       name="city"
                       defaultValue={item.city}
                       onChange={handleInputChange}
                     />
                   </div>
                   <div>
                     <input
                       name="phone"
                       defaultValue={item.phone}
                       onChange={handleInputChange}
                     />
                   </div>
                   <div>
                     <input
                       name="email"
                       defaultValue={item.email}
                       onChange={handleInputChange}
                     />
                   </div>
                   <div>
                     <input
                       name="website"
                       defaultValue={item.website}
                       onChange={handleInputChange}
                     />
                   </div>
                   <div>
                     <input
                       name="description"
                       defaultValue={item.description}
                       onChange={handleInputChange}
                     />
                   </div>
                   <div>
                     <input
                       name="tour_video"
                       defaultValue={item.tour_video}
                       onChange={handleInputChange}
                     />
                   </div>
                   <div>
                     <input
                       name="rating"
                       defaultValue={item.rating}
                       onChange={handleInputChange}
                     />
                   </div>
                   <div>
                     <input
                       name="price"
                       defaultValue={item.price}
                       onChange={handleInputChange}
                     />
                   </div>
                   <button onClick={() => handleSubmit(item.id)}>submit</button>
                 </>
                ) : (
                  <>
                    <div className="flex justify-between">
                      <div>{item.name}</div>{" "}
                      <button onClick={() => deleteItem(item.id)}>
                        <FontAwesomeIcon icon={faX} />
                      </button>
                    </div>
                    {data.categories.map((cat: any, index: any) => {
                      if (item.category_id === cat.id) {
                        return <div key={index}>{cat.name}</div>;
                      }
                    })}
                    <div>{item.country}</div>
                    <div>{item.city}</div>
                    <div>{item.phone}</div>
                    <div>{item.email}</div>
                    <div>{item.website}</div>
                    <div>{item.description}</div>
                    <div>{item.tour_video}</div>
                    <div>{item.rating}</div>
                    <div>{item.price}</div>
                    <button onClick={() => setEdit(true)}>edit</button>
                  </>
                )}
              </div>
            );
          })}
      </div>
    );
  }
  
  export default Index;
  