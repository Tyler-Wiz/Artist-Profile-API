import React from "react";
import AdminLayout from "../../../components/layout";
import Update from "../../Update";

const getAllArtist = async (artist) => {
  const res = await fetch(`http://localhost:4000/api/artist/${artist}`, {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const artist = await getAllArtist(params.id);
  return (
    <AdminLayout>
      <Update data={artist} />
    </AdminLayout>
  );
};

export default page;
