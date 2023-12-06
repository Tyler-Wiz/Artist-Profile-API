import React from "react";
import AdminLayout from "../components/layout";
import Table from "../components/Table";

const getAllArtist = async () => {
  const res = await fetch("http://localhost:4000/api/artist/", {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

const page = async () => {
  const artists = await getAllArtist();
  const headers = ["artist", "real name", "label", "url"];
  const additionalHeaders = ["", ""];
  return (
    <AdminLayout>
      <Table
        data={artists}
        headers={headers}
        additionalHeaders={additionalHeaders}
        buttonLink="/admin/artist/post-new"
        buttonText="Add New Artist"
        headerTitle="Artists"
        SERVER_URL="http://localhost:4000/api/artist/"
        editLink="/admin/artist/edit/"
      />
      {/* <ArtistTable data={artists} /> */}
    </AdminLayout>
  );
};

export default page;
