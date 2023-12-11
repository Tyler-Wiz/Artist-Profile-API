"use client";

import React from "react";
import { IoMdMusicalNote, IoMdAlbums } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { TiPin } from "react-icons/ti";
import SectionHeader from "./SectionHeader";

const QuickInfo = ({ artists, songs }) => {
  const quickInfoItems = [
    {
      name: `${
        songs?.length === undefined
          ? "No Songs Posted"
          : `${songs.length} Songs Posted`
      } `,
      icon: <TiPin size={25} />,
      path: "",
    },
    {
      name: `${artists.length} Total Artists`,
      icon: <IoMdMusicalNote size={25} />,
      path: "",
    },
    { name: "30 active users", icon: <FaUsers size={25} />, path: "" },
  ];

  return (
    <section>
      <SectionHeader
        title="Quick Info"
        summary="Check Websites statistics for website"
      />
      <div className="flex justify-between my-12">
        <div className="text-sm" aria-label="info-tab">
          {quickInfoItems.map((item, i) => (
            <div key={i} className="flex gap-3 items-center mb-5">
              <p className="text-link">{item.icon}</p>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between flex-col">
          <div className="flex gap-3 items-center">
            <p className="text-link">
              <IoMdAlbums />
            </p>
            <p>150 Albums</p>
          </div>
          <button
            type="submit"
            className="bg-link rounded-full text-white py-2">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuickInfo;
