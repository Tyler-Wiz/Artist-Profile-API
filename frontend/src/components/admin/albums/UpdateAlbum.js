"use client";

import React, { useState } from "react";
import Input from "@/components/shared/Input";
import { useRouter } from "next/navigation";
import UpdateAlbumToApi from "@/services/api/albums/updateAlbumToApi";

const UpdateAlbum = ({ album }) => {
  const { album_title, released, album_image, external_url, artist_name, url } =
    album;
  const router = useRouter();
  const [formData, setFormData] = useState({
    album_title,
    external_url,
    released,
  });
  const [error, setError] = useState("");

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const albumData = {
      ...formData,
      album_image,
    };
    const res = await UpdateAlbumToApi(url, albumData);
    if (res === "OK") {
      router.push("/admin/albums");
    } else {
      setError(res);
    }
  };

  return (
    <>
      <h1 className="my-6 text-4xl text-secondary font-semibold"></h1>
      <form className="flex gap-8 w-full" onSubmit={handleSubmit}>
        <div className="w-4/6">
          <Input
            placeholder="Title"
            name="album_title"
            value={formData.album_title}
            type="text"
            onChange={handleChange}
            width="w-full"
          />
          <Input
            placeholder="External URL"
            type="text"
            name="external_url"
            value={formData.external_url}
            onChange={handleChange}
            width="w-full"
          />
          <Input
            placeholder="Released Date"
            type="text"
            name="released"
            value={formData.released}
            onChange={handleChange}
            width="w-full"
          />
          <p className="mt-6"> Artist: {artist_name}</p>
          <div className="w-2/6 mt-6">
            <button className="w-full bg-primary text-text-primary px-2 py-2 rounded-md mt-4">
              Publish
            </button>
            {error && <p className="text-center text-red-800 mt-5">{error}</p>}
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdateAlbum;
