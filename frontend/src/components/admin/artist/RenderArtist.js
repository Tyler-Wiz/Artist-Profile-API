import React from "react";
import AdminLayout from "../shared/AdminLayout";
import Table from "../shared/Table";
import getAllArtist from "@/services/api/artist/getAllArtist";

const RenderArtist = async () => {
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
    </AdminLayout>
  );
};

export default RenderArtist;
