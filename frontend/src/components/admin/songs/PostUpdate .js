"use client";

import React, { useState } from "react";
import Input from "@/components/shared/Input";
import { useRouter } from "next/navigation";
import updateSong from "@/services/api/songs/updateSong";

const PostUpdate = ({ title, song }) => {
  const router = useRouter();
  const { song_title, released, song_image, external_url, artist_name, url } =
    song;
  const [formData, setFormData] = useState({
    song_title,
    external_url,
    released,
    song_image,
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await updateSong(url, formData);
    if (res) {
      router.push("/admin/songs");
    }
  };

  return (
    <>
      <h1 className="my-6 text-4xl text-secondary font-semibold">{title}</h1>
      <form className="flex gap-8 w-full" onSubmit={handleSubmit}>
        <div className="w-4/6">
          <Input
            placeholder="Title"
            name="song_title"
            value={formData.song_title}
            type="text"
            onChange={handleChange}
          />
          <Input
            placeholder="External URL"
            type="text"
            name="external_url"
            value={formData.external_url}
            onChange={handleChange}
          />
          <Input
            placeholder="Released Date"
            type="text"
            name="released"
            value={formData.released}
            onChange={handleChange}
          />
          <p className="mt-6"> Artist:{artist_name}</p>
          <div className="w-2/6 mt-6">
            <button className="w-full bg-primary text-text-primary px-2 py-2 rounded-md mt-4">
              Publish
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PostUpdate;
