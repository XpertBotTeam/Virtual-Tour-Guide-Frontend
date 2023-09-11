import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const local= "http://localhost:8000/api"
const production= "https://vtg.xpertbotacademy.online/api"

const cookie = Cookies.get("virtual-tour-cookie")


// Define a service using a base URL and expected endpoints
export const ToursSlice = createApi({
  reducerPath: 'toursApi',
  baseQuery: fetchBaseQuery({ baseUrl:production }),
  endpoints: (builder) => ({
    createPost: builder.mutation({
        query: (data) => ({
          url: `/createTour`,
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: data,
        }),
      }),
  }),
})

export const { useCreatePostMutation } = ToursSlice;
