"use client";

import React from "react";
import Index from "./Index";
import { useGetAdminPostsQuery } from "@/app/api/toursSlice";

function PostsLogic() {
  const { isLoading, isSuccess, data, error, isError, refetch } =
    useGetAdminPostsQuery({});

  return (
    <>
      {isSuccess && data ? (
        (data?.tours.data).map((item: any, index: any) => {
          return (
            <Index
              data={item}
              refetch={refetch}
              key={index}
              categories={data.categories}
            />
          );
        })
      ) : (
        <div>loading</div>
      )}
    </>
  );
}

export default PostsLogic;
