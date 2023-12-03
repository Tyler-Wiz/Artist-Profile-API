import React from "react";
import AdminLayout from "./components/layout";
import Homepage from "./Home/Homepage";

const page = () => {
  return (
    <AdminLayout>
      <Homepage />
    </AdminLayout>
  );
};

export default page;
