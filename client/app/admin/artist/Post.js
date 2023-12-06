"use client";

import React, { useState } from "react";
import TipTap from "../components/TipTap";
import UploadForm from "../components/ImageForm";
import Input from "../components/Input";
import { useRouter } from "next/navigation";
import axios from "axios";

const Post = ({ title }) => {
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [formData, setFormData] = useState({
    artist_name: "",
    real_name: "",
    hometown: "",
    label: "",
    twitter: "",
    instagram: "",
    age: "",
  });
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
    const artistData = {
      ...formData,
      image,
      name,
      bio: description,
    };
    try {
      const res = await axios.post(
        `http://localhost:4000/api/artist/upload`,
        artistData,
        {
          withCredentials: true,
        }
      );
      if (res.status) {
        router.push("/admin/artist");
      }
    } catch (error) {
      setError(error.response.data.errorMessage);
    }
  };

  return (
    <>
      <h1 className="my-6 text-4xl text-secondary font-semibold">{title}</h1>
      <form className="flex gap-8 w-full" onSubmit={handleSubmit}>
        <div className="w-4/6">
          <Input
            placeholder="Artist Name"
            name="artist_name"
            value={formData.artist_name}
            type="text"
            onChange={handleChange}
          />
          <Input
            placeholder="Real Name"
            type="text"
            name="real_name"
            value={formData.real_name}
            onChange={handleChange}
          />
          <Input
            placeholder="YYYY-MM-DD"
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          <TipTap setDescription={setDescription} />
        </div>
        <div className="w-2/6">
          <UploadForm
            handleImageSubmit={handleImageSubmit}
            image={image}
            name={name}
          />
          <Input
            placeholder="Hometown"
            type="text"
            name="hometown"
            value={formData.hometown}
            onChange={handleChange}
          />
          <Input
            placeholder="label"
            type="text"
            name="label"
            value={formData.label}
            onChange={handleChange}
          />
          <Input
            placeholder="Twitter"
            type="text"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
          />
          <Input
            placeholder="Instagram"
            type="text"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
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
