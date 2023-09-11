import React from "react";

function TextInput({
    title,
    handleChange,
    handleBlur,
    value,
    touched,
    error,
    name
  }: {
    title: string;
    handleChange: any;
    handleBlur: any;
    value: any;
    touched: any;
    error: any;
    name:string
  }) {
    return (
      <div className="mb-4 w-full">
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-black-text "
        >
          {title}
        </label>
        <div className="relative">
          <input
            type="text"
            id={name}
            className="bg-gray-50 border border-gray-300 text-black-text text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
            placeholder={title}
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
          />
          {touched && error ? (
            <div className="text-olive-green">{error}</div>
          ) : null}
        </div>
      </div>
    );
  }
  

export default TextInput;
