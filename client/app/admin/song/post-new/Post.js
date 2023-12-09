"use client";

import React, { useState } from "react";
import UploadForm from "../../components/ImageForm";
import Input from "../../components/Input";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

const Post = ({ title, artists }) => {
  const router = useRouter();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [formData, setFormData] = useState({
    song_title: "",
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
    const songData = {
      ...formData,
      image,
      name,
      artist_id: selectedOption,
    };
    try {
      const res = await axios.post(
        `http://localhost:4000/api/songs/upload`,
        songData,
        {
          withCredentials: true,
        }
      );
      if (res.status) {
        router.push("/admin/song");
      }
    } catch (error) {
      console.log(error);
      // toast(error.response.data.errorMessage, {
      //   position: toast.POSITION.BOTTOM_RIGHT,
      // });
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
          <label>
            Select Artist:
            <select
              value={selectedOption}
              onChange={handleOptionsChange}
              className="ml-4 m-6 p-2">
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

export default Post;
