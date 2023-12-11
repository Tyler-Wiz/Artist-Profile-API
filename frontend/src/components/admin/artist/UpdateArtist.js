"use client";

import React, { useState } from "react";
import TipTap from "../shared/TipTap";
import UploadForm from "../shared/ImageForm";
import Input from "@/components/shared/Input";
import { useRouter } from "next/navigation";
import apiUpdateArtist from "@/services/api/artist/apiUpdateArtist";

const UpdateArtist = ({ data }) => {
  const {
    artist_name,
    real_name,
    bio,
    featured_image,
    hometown,
    label,
    twitter,
    instagram,
    url,
    age,
  } = data;
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [formData, setFormData] = useState({
    artist_name,
    real_name,
    hometown,
    label,
    twitter,
    instagram,
    age,
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
      featured_image,
    };
    const res = await apiUpdateArtist(url, artistData);
    if (res === "OK") {
      router.push("/admin/artist");
    } else {
      setError(res);
    }
  };

  return (
    <>
      <h1 className="my-6 text-4xl text-secondary font-semibold">
        Edit Artist
      </h1>
      <form className="flex gap-8 w-full" onSubmit={handleSubmit}>
        <div className="w-4/6">
          <Input
            placeholder="Artist Name"
            name="artist_name"
            value={formData.artist_name}
            type="text"
            onChange={handleChange}
            width="w-full"
          />
          <Input
            placeholder="Real Name"
            type="text"
            name="real_name"
            value={formData.real_name}
            onChange={handleChange}
            width="w-full"
          />
          <Input
            placeholder="YYYY-MM-DD"
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            width="w-full"
          />
          <TipTap setDescription={setDescription} content={bio} />
        </div>
        <div className="w-2/6">
          <UploadForm handleImageSubmit={handleImageSubmit} image={image} />
          <Input
            placeholder="Hometown"
            type="text"
            name="hometown"
            value={formData.hometown}
            onChange={handleChange}
            width="w-full"
          />
          <Input
            placeholder="label"
            type="text"
            name="label"
            value={formData.label}
            onChange={handleChange}
            width="w-full"
          />
          <Input
            placeholder="Twitter"
            type="text"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
            width="w-full"
          />
          <Input
            placeholder="Instagram"
            type="text"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            width="w-full"
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

export default UpdateArtist;
