import React from "react";
import AdminLayout from "../components/layout";
import Table from "../components/Table";

const getAllSongs = async () => {
  const res = await fetch("http://localhost:4000/api/songs/", {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

const page = async () => {
  const songs = await getAllSongs();
  const headers = ["artist", "title", "url", "released date", ""];
  const additionalHeaders = ["", ""];
  return (
    <AdminLayout>
      <Table
        data={songs}
        headers={headers}
        additionalHeaders={additionalHeaders}
        buttonLink="/admin/song/post-new"
        buttonText="Add New Song"
        headerTitle="Songs"
        SERVER_URL="http://localhost:4000/api/songs/"
        editLink="/admin/song/edit/"
      />
    </AdminLayout>
  );
};

export default page;
