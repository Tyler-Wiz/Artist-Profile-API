"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

const UploadForm = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

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
    const imageData = {
      image: image,
      name: name,
    };
    const res = await axios.post(`http://localhost:4000/api/images`, imageData);
    const data = await res.data;
    console.log(data);
    e.target.reset();
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="p-10 grid grid-cols-3 gap-6">
        <div className="flex flex-col mb-4 items-center">
          <div className="flex mb-6">
            <input
              type="file"
              multiple
              name="myImage"
              accept="image/png, image/gif, image/jpeg, image/webp"
              onChange={handleImageSubmit}
              required
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 py-2 px-6"
            />
          </div>
          <div className="w-[350px] h-[330px] bg-gray-200 rounded-lg flex item items-center justify-center">
            {!image ? (
              <p>Image preview</p>
            ) : (
              <Image src={image} width={250} height={280} alt="image" />
            )}
          </div>
          <button
            type="submit"
            className="bg-violet-600 w-[100%] text-white py-3 my-2 font-display uppercase font-semibold hover:bg-violet-500">
            Send Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
