import { useGetAdminPostsQuery, useGetCategoriesQuery } from "@/app/api/toursSlice";
import React from "react";

function DropMenu({
  handleChange,
  handleBlur,
  value,
  title,
  error,
  touched,
}: {
  handleChange: any;
  handleBlur: any;
  value: any;
  title: string;
  error: any;
  touched: any;
}) {

  const {isLoading,isSuccess,data,error:PostError,isError} = useGetAdminPostsQuery({})
  
  
  return (
    <div className="mb-4">
      <label
        htmlFor="category_id"
        className="block mb-2 text-sm font-medium text-black-text "
      >
        {title}
      </label>
      <select
        value={value.category_id}
        onChange={handleChange}
        onBlur={handleBlur}
        id="category_id"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a country</option>
        {data?.categories.map((item:any,index:any)=>{
          return <option value={item.id} key={index}>{item.name}</option>
        })}
      </select>
      {touched && error ? (
        <div className="text-olive-green">{error}</div>
      ) : null}
    </div>
  );
}

export default DropMenu;
