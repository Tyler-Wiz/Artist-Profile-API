import React from "react";
import PostAlbum from "@/components/admin/albums/PostAlbum";
import getAllArtist from "@/services/api/artist/getAllArtist";
import AdminLayout from "@/components/admin/shared/AdminLayout";

const page = async () => {
  const artists = await getAllArtist();
  return (
    <AdminLayout>
      <PostAlbum title="Add New Album Post" artists={artists} />
    </AdminLayout>
  );
};

export default page;
