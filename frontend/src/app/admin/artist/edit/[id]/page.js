import React from "react";
import AdminLayout from "@/components/admin/shared/AdminLayout";
import UpdateArtist from "@/components/admin/artist/UpdateArtist";
import getArtistById from "@/services/api/artist/getArtistById";

const page = async ({ params }) => {
  const artist = await getArtistById(params.id);
  return (
    <AdminLayout>
      <UpdateArtist data={artist} />
    </AdminLayout>
  );
};

export default page;
