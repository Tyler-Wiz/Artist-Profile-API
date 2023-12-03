import React from "react";
import AdminLayout from "../components/layout";
import SongTable from "./SongTable";

const getAllSongs = async () => {
  const res = await fetch("http://localhost:4000/api/songs/", {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

const page = async () => {
  const songs = await getAllSongs();
  return (
    <AdminLayout>
      <SongTable data={songs} />
    </AdminLayout>
  );
};

export default page;
