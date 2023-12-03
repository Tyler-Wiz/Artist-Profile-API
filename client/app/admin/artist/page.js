import React from "react";
import AdminLayout from "../components/layout";
import ArtistTable from "./ArtistTable";

const getAllArtist = async () => {
  const res = await fetch("http://localhost:4000/api/artist/", {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

const page = async () => {
  const artists = await getAllArtist();
  return (
    <AdminLayout>
      <ArtistTable data={artists} />
    </AdminLayout>
  );
};

export default page;
