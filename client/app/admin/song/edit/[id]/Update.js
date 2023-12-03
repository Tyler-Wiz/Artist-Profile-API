"use client";

import React, { useState } from "react";
import Input from "../../../components/Input";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

const Post = ({ title, song }) => {
  const { song_title, released, song_image, external_url, artist_name, url } =
    song;
  const router = useRouter();
  const [formData, setFormData] = useState({
    song_title,
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
    const songData = {
      ...formData,
      song_image,
    };
    try {
      const res = await axios.put(
        `http://localhost:4000/api/songs/${url}`,
        songData,
        {
          withCredentials: true,
        }
      );
      if (res.status) {
        router.push("/admin/song");
      }
    } catch (error) {
      toast(error.response.data.errorMessage);
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

export default Post;
