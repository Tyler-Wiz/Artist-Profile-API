"use client";

import React, { useLayoutEffect } from "react";
import AuthForm from "./AuthForm";
import { loginUser } from "@/store/features/auth-slice";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

const Login = () => {
  const { token } = useSelector((state) => state.auth);

  useLayoutEffect(() => {
    if (token) {
      redirect("/admin");
    }
  }, [token]);
  return <AuthForm title="login" dispatchAction={loginUser} />;
};

export default Login;
