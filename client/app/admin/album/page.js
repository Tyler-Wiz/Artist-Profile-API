import React from "react";
import AdminLayout from "../components/layout";
import Table from "../components/Table";

const getAllAlbums = async () => {
  const res = await fetch("http://localhost:4000/api/albums/", {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

const page = async () => {
  const headers = ["artist", "title", "url", "released date", ""];
  const additionalHeaders = ["", ""];
  const albums = await getAllAlbums();
  return (
    <AdminLayout>
      <Table
        data={albums}
        headers={headers}
        additionalHeaders={additionalHeaders}
        buttonLink="/admin/album/post-new"
        buttonText="Add New Album"
        headerTitle="Albums"
        SERVER_URL="http://localhost:4000/api/albums/"
        editLink="/admin/album/edit/"
      />
    </AdminLayout>
  );
};

export default page;
