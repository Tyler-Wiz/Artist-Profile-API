import React from "react";
import AdminLayout from "../../components/layout";
import Post from "./Post";

const getAllArtist = async () => {
  const res = await fetch("http://localhost:4000/api/artist/", {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

const page = async () => {
  const title = "Add New Album Post";
  const artists = await getAllArtist();
  return (
    <AdminLayout>
      <Post title={title} artists={artists} />
    </AdminLayout>
  );
};

export default page;
