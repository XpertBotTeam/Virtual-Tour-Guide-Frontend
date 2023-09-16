"use client";

import React, { useState,useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useSignInMutation } from "@/app/api/UsersSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import Cookies from "js-cookie";

const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password can't be longer than 20 characters"),
});

function Index() {
  const [signIn,{isLoading,isSuccess,isError,error,data}] = useSignInMutation()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signIn(values)
    },
  });
  const [showPass,setShowPass] = useState(false)
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    formik;

    useEffect(() => {
      if (data) {
        Cookies.set("virtual-tour-cookie", data.token, {
          secure: true,
          sameSite: "lax",
          expires: 30,
        });
      }
    }, [isSuccess, data]);
    
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-1/3 justify-center items-center p-12  rounded-md bg-darker-div-bg"
    >
      <div className="mb-6 w-full">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-black-text "
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          className="bg-gray-50 border border-gray-300 text-black-text text-sm rounded-md block w-full p-2.5  "
          placeholder="Enter Email..."
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email ? (
          <div className="text-olive-green">{errors.email}</div>
        ) : null}
      </div>
      <div className="mb-6 w-full">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-black-text "
          >
            Password
          </label>
          <div className="relative">
            <input
              type={!showPass?"password":"text"}
              id="password"
              className="bg-gray-50 border border-gray-300 text-black-text text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
              placeholder="Enter Password..."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <span onClick={()=>setShowPass(!showPass)} className="absolute top-1/2 transform -translate-y-1/2 right-2 text-sm text-black-text cursor-pointer">
            <FontAwesomeIcon icon={faEye} />

            </span>
          </div>
          {touched.password && errors.password ? (
            <div className="text-olive-green">{errors.password}</div>
          ) : null}
        </div>

      <button type="submit" className="bg-olive-green hover:bg-hover-olive-green transition-all duration-300 w-1/3 py-3 rounded-md">
          Submit
        </button>
    </form>
  );
}

export default Index;
