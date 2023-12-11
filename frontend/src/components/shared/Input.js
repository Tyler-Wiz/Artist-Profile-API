import React from "react";

const Input = ({
  type,
  placeholder,
  onChange,
  name,
  value,
  background,
  width,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      required
      className={`${background} p-3 rounded-lg block ${width} mt-2 outline-none`}
    />
  );
};

export default Input;
