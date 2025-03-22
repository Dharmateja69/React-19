// src/components/Input.jsx
import React from "react";

const Input = ({ type = "text", placeholder, value, onChange, onBlur }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className="w-full p-2 mb-5 border border-gray-300 rounded"
    />
  );
};

export default Input;
