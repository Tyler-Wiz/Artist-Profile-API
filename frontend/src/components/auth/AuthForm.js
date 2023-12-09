"use client";
import React, { useState } from "react";
import Input from "@/components/shared/Input";
import { useDispatch, useSelector } from "react-redux";

const AuthForm = ({ title, dispatchAction }) => {
  const dispatch = useDispatch();
  const { registerStatus, registerError, loginStatus, loginError } =
    useSelector((state) => state.auth);
  // Form Data States
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    is_admin: 0,
  });
  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(dispatchAction(formData));
  };

  return (
    <section className="flex justify-center pt-40 bg-sky-50 h-screen">
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl capitalize text-center font-semibold my-7">
          {title}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white px-20 py-14 shadow-lg rounded-lg"
          aria-label="auth-form">
          <label>
            Email Address
            <Input
              type="text"
              name="email"
              placeholder="email address"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Password
            <Input
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          {title === "register" && (
            <label className="inline-flex items-center mt-4">
              <input
                type="checkbox"
                className="hidden"
                name="is_admin"
                checked={formData.is_admin}
                onChange={handleChange}
              />
              <span className="relative inline-block w-6 h-6 border-2 border-gray-400 rounded-md transition duration-300">
                <span
                  className={`${
                    formData.is_admin ? "opacity-100" : "opacity-0"
                  } absolute inset-0 flex items-center justify-center transition duration-300`}>
                  <svg
                    className="w-4 h-4 text-green-500 fill-current"
                    viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
              </span>
              <span className="ml-2 text-gray-700">Admin</span>
            </label>
          )}
          <button
            type="submit"
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 mt-2"
            disabled={
              !formData.email && !formData.password && !formData.is_admin
                ? true
                : false
            }>
            {registerStatus === "pending" || loginStatus === "pending"
              ? "loading..."
              : title == "login"
              ? "Login"
              : "Register"}
          </button>
          {title == "login" && loginError && (
            <p className="text-center text-red-800">{loginError}</p>
          )}
          {title == "register" && registerError && (
            <p className="text-center text-red-800">
              {registerError.errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default AuthForm;
