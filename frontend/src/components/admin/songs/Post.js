"use client";

import React, { useState } from "react";
import UploadForm from "../shared/ImageForm";
import Input from "@/components/shared/Input";
import { useRouter } from "next/navigation";
import postSong from "@/services/api/songs/postSong";

const Post = ({ title, artists }) => {
  const router = useRouter();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [formData, setFormData] = useState({
    song_title: "",
    external_url: "",
    released: "",
    artist_id: "",
    image: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageSubmit = (e) => {
    const file = e.target.files[0];
    setName(file.name);
    convert2base64(file);
  };

  const convert2base64 = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormData((prevState) => ({ ...prevState, image: reader.result }));
        setImage(reader.result);
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const songData = {
      ...formData,
      name,
    };
    const res = await postSong(songData);
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
            background="bg-white"
          />
          <Input
            placeholder="External URL"
            type="text"
            name="external_url"
            value={formData.external_url}
            onChange={handleChange}
            background="bg-white"
          />
          <Input
            placeholder="Released Date"
            type="text"
            name="released"
            value={formData.released}
            onChange={handleChange}
            background="bg-white"
          />
          <label>
            Select Artist:
            <select
              value={formData.artist_id}
              name="artist_id"
              onChange={handleChange}
              className="ml-4 m-6 p-2">
              <option></option>
              {artists.map((artist) => (
                <option key={artist.id} value={artist.id}>
                  {artist.artist}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="w-2/6">
          <UploadForm
            handleImageSubmit={handleImageSubmit}
            image={image}
            name={name}
          />
          <button className="w-full bg-primary text-text-primary px-2 py-2 rounded-md mt-4">
            Publish
          </button>
        </div>
      </form>
    </>
  );
};

export default Post;
