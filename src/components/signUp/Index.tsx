"use client";

import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useSignUpMutation } from "@/app/api/UsersSlice";


const validationSchema = yup.object({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .min(8, "Phone number must be at least 8 characters")
    .max(15, "Phone number can't be longer than 15 characters")
    .required("Phone number is required"),
    password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])/,
      "Password must contain at least one uppercase or lowercase letter"
    )
    .matches(
      /^(?=.*\d)/,
      "Password must contain at least one digit"
    )
    .matches(
      /^(?=.*[@$!%*#?&])/,
      "Password must contain at least one special character"
    )
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password can't be longer than 20 characters"),
});

function Index() {
  const [signUp, { isLoading, isSuccess, data, error, isError }] =
    useSignUpMutation();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signUp(values);
    },
  });
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    formik;

  console.log(isSuccess);
  console.log(error);
  console.log(data);


  return (
    <div className="w-full my-12 flex flex-col justify-center items-center gap-4">
       <h1 className='text-3xl font-bold'>Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-1/3 justify-center items-center p-12 bg-light-dark rounded-md "
      >
        <div className="mb-6 w-full">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter First Name..."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.first_name}
          />
          {touched.first_name && errors.first_name ? (
            <div className="text-red-500">{errors.first_name}</div>
          ) : null}
        </div>
        <div className="mb-6 w-full">
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Last Name..."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.last_name}
          />
          {touched.last_name && errors.last_name ? (
            <div className="text-red-500">{errors.last_name}</div>
          ) : null}
        </div>
        <div className="mb-6 w-full">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Email..."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {touched.email && errors.email ? (
            <div className="text-red-500">{errors.email}</div>
          ) : null}
        </div>
        <div className="mb-6 w-full">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Password..."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {touched.password && errors.password ? (
            <div className="text-red-500">{errors.password}</div>
          ) : null}
        </div>
        <div className="mb-6 w-full">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Phone Number..."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />
          {touched.phone && errors.phone ? (
            <div className="text-red-500">{errors.phone}</div>
          ) : null}
        </div>
        <button type="submit" className="red-color w-1/3 py-3 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Index;
