"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const AuthForm = ({ dispatchAction, title }) => {
  const dispatch = useDispatch();

  // Get Error States
  const { loginStatus, loginError, registerError } = useSelector(
    (state) => state.auth
  );

  // Form Data States
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState("");

  // Form Error States
  const [errors, setErrors] = useState({});

  // Handle Form State Changes
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCheck = () => {
    setIsAdmin(!isAdmin);
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    let is_admin = 0;
    if (isAdmin) {
      is_admin = 1;
    }
    dispatch(dispatchAction({ ...formData, is_admin }));
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">{title}</h1>
      <form
        className="flex flex-col gap-4 bg-white px-20 py-14 shadow-lg rounded-lg"
        onSubmit={handleSubmit}>
        <label>
          Email Address
          <input
            className="bg-slate-100 p-3 rounded-lg block w-[300px] mt-2"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
        </label>
        <label>
          Password
          <input
            className="bg-slate-100 p-3 rounded-lg block w-[300px] mt-2"
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </label>
        {title === "Register" ? (
          <>
            <div className="pb-4 flex items-center">
              <label htmlFor="checkbox" className="label mr-3">
                Admin User ?
              </label>
              <input
                type="checkbox"
                name="agreed"
                id="checkbox"
                checked={isAdmin}
                onChange={handleCheck}
                className="form-checkbox h-5 w-5"
              />
            </div>
          </>
        ) : (
          ""
        )}
        <button
          // disabled={loginStatus}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 mt-2">
          {loginStatus === "pending"
            ? "Loading..."
            : title === "Login"
            ? "login"
            : "Register"}
        </button>
        {registerError ? (
          <p className=" text-red-600">{registerError.errorMessage}</p>
        ) : (
          ""
        )}
        {loginError ? (
          <p className=" text-red-600 text-center">{loginError}</p>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default AuthForm;
