'use client'

import React, { useState , useEffect} from "react";
import TextInput from "./TextInput";
import * as yup from "yup";
import { useFormik } from "formik";
import { useCreatePostMutation } from "@/app/api/toursSlice";
import Cookies from "js-cookie";
import DropMenu from "./DropMenu";
import LocationSearch from "./LocationSeach";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  category_id: yup.string().required("Category is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
  phone: yup.string().required("Phone is required"),
  email: yup.string().required("email is required"),
  website: yup.string().required("Website is required"),
  description: yup.string().required("Description is required"),
  latitude: yup.number().required("Latitude is required"),
  longtitude: yup.number().required("Longititude is required"),
  tour_video: yup.string().required("Video is required"),
  rating: yup.string().required("rating is required").max(5).min(0),
  price: yup.number().required("Price is required"),
});

function AddPostForm() {
  const [createPost, { data, isLoading, isSuccess, isError, error }] =
    useCreatePostMutation();

  const [selectedCountry, setSelectedCountry]:any = useState(
    null
  );
  const [selectedCity, setSelectedCity]:any = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      category_id: "",
      address: "",
      city: "",
      country: "",
      phone: "",
      email: "",
      website: "",
      description: "",
      latitude: "",
      longtitude: "",
      tour_video: "",
      rating: "",
      price: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Set the form values for country and city

      createPost(values);
    },
  });

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    formik;

    useEffect(() => {

      if (selectedCountry) {
        values.country = selectedCountry.display_name;
      }
      if (selectedCity) {
        values.city = selectedCity.display_name;
        values.latitude = selectedCity.lat;
        values.longtitude = selectedCity.lon;
      }
      
    }, [selectedCountry,selectedCity,values])

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
          disabled={false}
        />

        <DropMenu
          title="Category"
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
          disabled={false}
        />
        <LocationSearch
          title="Country"
          value={values.country}
          setLocationData={(data: any) =>
            setSelectedCountry(data)
          }
        />

        <LocationSearch
          title="City"
          value={values.city}
          setLocationData={(data: any) =>
            setSelectedCity(data)
          }
        />
        <TextInput
          title="longtitude"
          name="longtitude"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.longtitude}
          error={errors.longtitude}
          touched={touched.longtitude}
          disabled={true}
        />
        <TextInput
          title="latitude"
          name="latitude"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.latitude}
          error={errors.latitude}
          touched={touched.latitude}
          disabled={true}
        />

        <TextInput
          title="Phone"
          name="phone"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.phone}
          error={errors.phone}
          touched={touched.phone}
          disabled={false}
        />
        <TextInput
          title="Email"
          name="email"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.email}
          error={errors.email}
          touched={touched.email}
          disabled={false}
        />
        <TextInput
          title="Website"
          name="website"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.website}
          error={errors.website}
          touched={touched.website}
          disabled={false}
        />
        <TextInput
          title="Description"
          name="description"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.description}
          error={errors.description}
          touched={touched.description}
          disabled={false}
        />
        <TextInput
          title="Video"
          name="tour_video"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.tour_video}
          error={errors.tour_video}
          touched={touched.tour_video}
          disabled={false}
        />
        <TextInput
          title="Rating"
          name="rating"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.rating}
          error={errors.rating}
          touched={touched.rating}
          disabled={false}
        />
        <TextInput
          title="Price"
          name="price"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.price}
          error={errors.price}
          touched={touched.price}
          disabled={false}
        />
        <button type="submit" className="px-4 py-2 bg-olive-green text-white font-semibold rounded-md">Submit</button>
      </form>
    </div>
  );
}

export default AddPostForm;
