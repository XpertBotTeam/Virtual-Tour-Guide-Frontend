"use client";

import React from "react";
import TextInput from "./TextInput";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  LastName: yup.string().required("Last Name is requires"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password can't be longer than 20 characters"),
});

function Index() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      LastName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    formik;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-1/2 justify-center items-center p-8 bg-light-dark rounded-md"
    >
      <div className="mb-6 w-full">
        <label
          htmlFor="firstName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter First Name..."
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName ? (
            <div className="text-red-500">{errors.firstName}</div>
          ) : null}
      </div>
      <div className="mb-6 w-full">
        <label
          htmlFor="LastName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Last Name
        </label>
        <input
          type="text"
          id="LastName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Last Name..."
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.LastName}
        />
        {touched.LastName && errors.LastName ? (
            <div className="text-red-500">{errors.LastName}</div>
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

      <button type="submit" className="red-color w-1/3 py-3 rounded-md">
        Submit
      </button>
    </form>
  );
}

export default Index;
