"use client";

import React, { useState } from "react";
import UploadForm from "../shared/ImageForm";
import Input from "@/components/shared/Input";
import { useRouter } from "next/navigation";
import postAlbumToApi from "@/services/api/albums/postAlbumToApi";

const PostAlbum = ({ title, artists }) => {
  const router = useRouter();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [formData, setFormData] = useState({
    album_title: "",
    external_url: "",
    released: "",
  });

  const handleOptionsChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const [error, setError] = useState("");

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
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
        setImage(reader.result);
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const albumData = {
      ...formData,
      image,
      name,
      artist_id: selectedOption,
    };
    const res = await postAlbumToApi(albumData);
    if (res === "OK") {
      router.push("/admin/album");
    } else {
      setError(res);
    }
  };

  return (
    <>
      <h1 className="my-6 text-4xl text-secondary font-semibold">{title}</h1>
      <form className="flex gap-8 w-full" onSubmit={handleSubmit}>
        <div className="w-4/6">
          <Input
            placeholder="Title"
            name="album_title"
            value={formData.album_title}
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
          <label>
            Select Artist:
            <select
              value={selectedOption}
              onChange={handleOptionsChange}
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
          {error && <p className="text-center text-red-800 mt-5">{error}</p>}
        </div>
      </form>
    </>
  );
};

export default PostAlbum;
