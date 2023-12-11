import React from "react";
import AdminLayout from "../shared/AdminLayout";
import Table from "../shared/Table";
import getAllSongs from "@/services/api/songs/getAllSongs";

const RenderSongs = async () => {
  const songs = await getAllSongs();
  const headers = ["artist", "title", "url", "released date", ""];
  const additionalHeaders = ["", ""];
  return (
    <AdminLayout>
      <Table
        data={songs}
        headers={headers}
        additionalHeaders={additionalHeaders}
        buttonLink="/admin/songs/post-new"
        buttonText="Add New Song"
        headerTitle="Songs"
        SERVER_URL="http://localhost:4000/api/songs/"
        editLink="/admin/songs/edit/"
      />
    </AdminLayout>
  );
};

export default RenderSongs;
