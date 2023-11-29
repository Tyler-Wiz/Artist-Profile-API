"use client";

import React, { useLayoutEffect } from "react";
import AuthForm from "../components/auth/AuthForm";
import { loginUser } from "../redux/features/auth-slice";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import withLogin from "../components/auth/withLogin";

const Login = () => {
  const { token } = useSelector((state) => state.auth);

  useLayoutEffect(() => {
    if (token) {
      redirect("/");
    }
  }, [token]);

  const title = "Login";
  return <AuthForm dispatchAction={loginUser} title={title} />;
};

export default Login;
