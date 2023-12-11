import React from "react";
import getAllAlbums from "@/services/api/albums/getAllAlbumsFromApi";
import AdminLayout from "../shared/AdminLayout";
import Table from "../shared/Table";

const RenderAlbums = async () => {
  const headers = ["artist", "title", "url", "released date", ""];
  const additionalHeaders = ["", ""];
  const albums = await getAllAlbums();
  return (
    <AdminLayout>
      <Table
        data={albums}
        headers={headers}
        additionalHeaders={additionalHeaders}
        buttonLink="/admin/albums/post-new"
        buttonText="Add New Album"
        headerTitle="Albums"
        SERVER_URL="http://localhost:4000/api/albums/"
        editLink="/admin/albums/edit/"
      />
    </AdminLayout>
  );
};

export default RenderAlbums;
