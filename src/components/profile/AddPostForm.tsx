"use client";

import React from "react";
import TextInput from "./TextInput";
import * as yup from "yup";
import { useFormik } from "formik";
import { useCreatePostMutation } from "@/app/api/toursSlice";
import Cookies from "js-cookie";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  user_id: yup.string().required("ID is required"),
  category_id: yup.string().required("Category is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
  phone: yup.string().required("Phone is required"),
  email: yup.string().required("email is required"),
  website: yup.string().required("Website is required"),
  description: yup.string().required("Description is required"),
  latitude: yup.string().required("Latitude is required"),
  longititude: yup.string().required("Longititude is required"),
  video: yup.string().required("Video is required"),
  rating: yup.string().required("rating is required"),
  price: yup.number().required("Price is required"),
});

function AddPostForm() {

    const [createPost,{data,isLoading,isSuccess,isError,error}] = useCreatePostMutation()

  const formik = useFormik({
    initialValues: {
      name: "",
      user_id: "",
      category_id: "",
      address: "",
      city: "",
      country: "",
      phone: "",
      email: "",
      website: "",
      description: "",
      latitude: "",
      longititude: "",
      video: "",
      rating: "",
      price: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createPost(values)
    },
  });
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    formik;

console.log(data)
console.log(error)
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-darker-div-bg mt-4 rounded-md">
      <form onSubmit={handleSubmit} className="w-full">
        <TextInput
          title="Name"
          name="name"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.name}
          error={errors.name}
          touched={touched.name}
        />
        <TextInput
          title="User Id"
          name="user_id"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.user_id}
          error={errors.user_id}
          touched={touched.user_id}
        />
        <TextInput
          title="Category"
          name="category_id"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.category_id}
          error={errors.category_id}
          touched={touched.category_id}
        />
        <TextInput
          title="Address"
          name="address"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.address}
          error={errors.address}
          touched={touched.address}
        />
        <TextInput
          title="City"
          name="city"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.city}
          error={errors.city}
          touched={touched.city}
        />
        <TextInput
          title="Country"
          name="country"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.country}
          error={errors.country}
          touched={touched.country}
        />
        <TextInput
          title="Phone"
          name="phone"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.phone}
          error={errors.phone}
          touched={touched.phone}
        />
        <TextInput
          title="Email"
          name="email"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.email}
          error={errors.email}
          touched={touched.email}
        />
        <TextInput
          title="Website"
          name="website"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.website}
          error={errors.website}
          touched={touched.website}
        />
        <TextInput
          title="Description"
          name="description"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.description}
          error={errors.description}
          touched={touched.description}
        />
        <TextInput
          title="Latitude"
          name="latitude"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.latitude}
          error={errors.latitude}
          touched={touched.latitude}
        />
        <TextInput
          title="Longititude"
          name="longititude"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.longititude}
          error={errors.longititude}
          touched={touched.longititude}
        />
        <TextInput
          title="Video"
          name="video"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.video}
          error={errors.video}
          touched={touched.video}
        />
        <TextInput
          title="rating"
          name="rating"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.rating}
          error={errors.rating}
          touched={touched.rating}
        />
        <TextInput
          title="Price"
          name="price"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.price}
          error={errors.price}
          touched={touched.price}
        />
        {/* End of repeated TextInput components */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPostForm;

