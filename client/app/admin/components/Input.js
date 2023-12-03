import React from "react";

const Input = ({ type, placeholder, onChange, name, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      className="w-full px-2 py-2 my-2 outline-none rounded-md "
      required
    />
  );
};

export default Input;
