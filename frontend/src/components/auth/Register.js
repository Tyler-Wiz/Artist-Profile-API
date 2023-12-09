"use client";

import React from "react";
import AuthForm from "./AuthForm";
import { registerUser } from "@/store/features/auth-slice";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

const Register = () => {
  const { token } = useSelector((state) => state.auth);

  useLayoutEffect(() => {
    if (token) {
      redirect("/admin");
    }
  }, [token]);
  return <AuthForm title="register" dispatchAction={registerUser} />;
};

export default Register;
