"use client";

import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useSignUpMutation } from "@/app/api/UsersSlice";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";


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
    .matches(/^(?=.*\d)/, "Password must contain at least one digit")
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
    const [showPass,setShowPass] = useState(false)

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
    <div className="w-full my-12 flex flex-col justify-center items-center gap-4 ">
      <h1 className="text-3xl font-bold text-black-text">Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-1/3 justify-center items-center p-12 rounded-md bg-darker-div-bg"
      >
        <div className="mb-6 w-full">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium  text-black-text"
          >
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-black-text text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            placeholder="Enter First Name..."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.first_name}
          />
          {touched.first_name && errors.first_name ? (
            <div className="text-olive-green">{errors.first_name}</div>
          ) : null}
        </div>
        <div className="mb-6 w-full">
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-black-text "
          >
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-black-text text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            placeholder="Enter Last Name..."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.last_name}
          />
          {touched.last_name && errors.last_name ? (
            <div className="text-olive-green">{errors.last_name}</div>
          ) : null}
        </div>
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
            className="bg-gray-50 border border-gray-300 text-black-text text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
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

        <div className="mb-6 w-full">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-black-text "
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-black-text text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            placeholder="Enter Phone Number..."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />
          {touched.phone && errors.phone ? (
            <div className="text-olive-green">{errors.phone}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="bg-olive-green hover:bg-hover-olive-green transition-all duration-300 w-1/3 py-3 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Index;
