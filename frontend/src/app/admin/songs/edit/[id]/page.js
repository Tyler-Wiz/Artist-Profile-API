import React from "react";
import AdminLayout from "@/components/admin/shared/AdminLayout";
import PostUpdate from "@/components/admin/songs/PostUpdate ";
import getSongByUrl from "@/services/api/songs/getSongByUrl";

const page = async ({ params }) => {
  const song = await getSongByUrl(params.id);
  return (
    <AdminLayout>
      <PostUpdate song={song} />
    </AdminLayout>
  );
};

export default page;
