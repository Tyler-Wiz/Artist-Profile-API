import React from "react";

const Input = ({ type, placeholder, onChange, name, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      required
      className="bg-slate-100 p-3 rounded-lg block w-[300px] mt-2 outline-none"
    />
  );
};

export default Input;
