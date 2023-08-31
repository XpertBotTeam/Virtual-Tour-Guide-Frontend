import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const local= "http://localhost:8000/api"
const production= "https://vtg.xpertbotacademy.online/api/"

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl:production }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (data) => ({
        url: `/login`,
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: data,
      }),
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: `/register`,
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: data,
        
      }),
    }),
  }),
})

export const { useSignInMutation, useSignUpMutation } = usersApi;
