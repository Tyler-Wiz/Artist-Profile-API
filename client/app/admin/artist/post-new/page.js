import React from "react";
import Post from "../Post";
import AdminLayout from "../../components/layout";

const page = () => {
  const title = "Add New Artist Post";
  return (
    <AdminLayout>
      <Post title={title} />
    </AdminLayout>
  );
};

export default page;
