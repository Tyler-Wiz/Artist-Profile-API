"use client";

import React from "react";
import SectionHeader from "./SectionHeader";

const LatestActivity = ({ songs }) => {
  return (
    <>
      <SectionHeader
        title="Activity"
        summary="All recent activities on the site"
      />
      <table className="min-w-full divide-y divide-gray-200 my-6 text-sm">
        <thead className="font-regular">
          <tr>
            <th className="text-left">#</th>
            <th className="text-left">Title</th>
            <th className="text-left">Published Date</th>
            <th className="text-left">Artist</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {songs.map((item, i) => (
            <tr key={i}>
              <td className="py-2 whitespace-nowrap">{i + 1}</td>
              <td className="py-2 whitespace-nowrap">{item.song_title}</td>
              <td className="p-4 whitespace-nowrap">
                {item.created_at.split("T")[0]}
              </td>
              <td className="py-2 whitespace-nowrap">{item.artist_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default LatestActivity;
