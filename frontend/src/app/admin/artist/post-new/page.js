import React from "react";
import PostArtist from "@/components/admin/artist/PostArtist";
import AdminLayout from "@/components/admin/shared/AdminLayout";

const page = () => {
  return (
    <AdminLayout>
      <PostArtist title="Add New Artist Post" />
    </AdminLayout>
  );
};

export default page;
