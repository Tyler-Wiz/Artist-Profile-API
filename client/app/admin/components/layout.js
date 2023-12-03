import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-background w-full">
      <Sidebar />
      <div className="flex-1">
        <Nav />
        <div className="bg-background px-10 py-6">{children}</div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLayout;
