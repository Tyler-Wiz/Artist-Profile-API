"use client";

import React from "react";
import SectionHeader from "./SectionHeader";

const AddArtist = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <SectionHeader
        title="Add Artist"
        summary="Quick action for adding artist"
      />
      <form className="flex flex-col w-full mt-6" onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-input outline-none rounded-xl px-4 py-2"
          placeholder="title"
        />
        <textarea
          className="bg-input outline-none rounded-xl my-6 h-48 p-4 resize-none"
          placeholder="content"
          maxLength={600}></textarea>
        <button type="submit" className="bg-link rounded-xl text-white py-2">
          Publish
        </button>
      </form>
    </>
  );
};

export default AddArtist;
