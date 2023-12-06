import React from "react";
import AdminLayout from "../../../components/layout";
import Update from "./Update";

const getAlbumByUrl = async (id) => {
  const res = await fetch(`http://localhost:4000/api/albums/${id}`, {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const album = await getAlbumByUrl(params.id);
  console.log(album);
  return (
    <AdminLayout>
      <Update album={album} />
    </AdminLayout>
  );
};

export default page;
