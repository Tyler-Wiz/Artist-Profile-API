import React from "react";
import Post from "@/components/admin/songs/Post";
import AdminLayout from "@/components/admin/shared/AdminLayout";
import getAllArtist from "@/services/api/artist/getAllArtist";

const page = async () => {
  const artists = await getAllArtist();
  return (
    <AdminLayout>
      <Post title="Add New Song Post" artists={artists} />
    </AdminLayout>
  );
};

export default page;
