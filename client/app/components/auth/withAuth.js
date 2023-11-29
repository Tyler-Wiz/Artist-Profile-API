"use client";

import { useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

export default function withAuth(Component) {
  return function WithAuth(props) {
    const { token } = useSelector((state) => state.auth);
    useEffect(() => {
      if (!token) {
        redirect("/login");
      }
    }, [token]);

    if (!token) {
      return null;
    }
    return <Component {...props} />;
  };
}
