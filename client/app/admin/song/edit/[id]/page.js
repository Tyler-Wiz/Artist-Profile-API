import React from "react";
import AdminLayout from "../../../components/layout";
import Update from "./Update";

const getSongByUrl = async (id) => {
  const res = await fetch(`http://localhost:4000/api/songs/${id}`, {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const song = await getSongByUrl(params.id);
  return (
    <AdminLayout>
      <Update song={song} />
    </AdminLayout>
  );
};

export default page;
