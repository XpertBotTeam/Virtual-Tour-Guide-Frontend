import React, { ChangeEvent, FocusEvent } from 'react';

interface TextInputProps {
  title: string;
  placeHolder: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  value: string;
}

function TextInput({ title, placeHolder, type, onChange, onBlur, value,touched,error }: any) {
  return (
    <div className="mb-6 w-full">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <input
        type={type}
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeHolder}
        onChange={onChange}
        onBlur={onBlur}
        defaultValue={value}
      />
    </div>
  );
}

export default TextInput;
