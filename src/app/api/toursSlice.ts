import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const local = "http://localhost:8000/api";
const production = "https://vtg.xpertbotacademy.online/api";

const cookie = Cookies.get("virtual-tour-cookie");

// Define a service using a base URL and expected endpoints
export const ToursSlice = createApi({
  reducerPath: "toursApi",
  baseQuery: fetchBaseQuery({ baseUrl: local }),
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (data) => ({
        url: `/tours`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${cookie}`,
        },
        method: "POST",
        body: data,
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/adminTours/${id}`, 
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${cookie}`,
        },
        method: "DELETE", 
      }),
    }),
    updatePost: builder.mutation({
      query: ({ id, data }) => ({
        url: `/adminTours/${id}`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${cookie}`,
        },
        method: "PUT",
        body: JSON.stringify(data), 
      }),
    }),
    getAdminPosts: builder.query({
      query: () => ({
        url: "adminTours",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${cookie}`,
        },
      }),
    }),
    createCategory: builder.mutation({
      query: (data) => ({
        url: `/categories`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${cookie}`,
        },
        method: "POST",
        body: data,
      }),
    }),
    getCategories: builder.query({
      query: () => ({
        url: "categories",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${cookie}`,
        },
      }),
    }),
  }),
});

export const {
  useCreatePostMutation,
  useCreateCategoryMutation,
  useGetCategoriesQuery,
  useGetAdminPostsQuery,
  useDeletePostMutation
} = ToursSlice;
