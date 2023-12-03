"use client";

import React from "react";
import AuthForm from "../auth/AuthForm";
import { registerUser } from "../../redux/features/auth-slice";

const Register = () => {
  const title = "Register";
  return <AuthForm dispatchAction={registerUser} title={title} />;
};

export default Register;
