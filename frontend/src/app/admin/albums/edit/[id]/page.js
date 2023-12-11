import React from "react";
import AdminLayout from "@/components/admin/shared/AdminLayout";
import UpdateAlbum from "@/components/admin/albums/UpdateAlbum";
import getAlbumByUrl from "@/services/api/albums/getAlbumByUrl";

const page = async ({ params }) => {
  const album = await getAlbumByUrl(params.id);
  return (
    <AdminLayout>
      <UpdateAlbum album={album} />
    </AdminLayout>
  );
};

export default page;
