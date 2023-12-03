"use client";

import React from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

const ArtistTable = ({ data }) => {
  const deleteArtist = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:4000/api/artist/${id}`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        toast("artist deleted successfully");
      }
    } catch (error) {
      console.log(error.response.data.errorMessage);
    }
  };

  return (
    <>
      <h1 className="my-6 text-4xl text-secondary font-semibold m-0 p-0">
        Artists
      </h1>
      <div className="flex justify-end">
        <Link href="/admin/artist/post-new">
          <button className="border-2 p-2 border-primary bg-text-primary text-sm text-primary">
            Add New Artist
          </button>
        </Link>
      </div>
      <table className="min-w-full divide-y divide-gray-200 my-6 text-sm">
        <thead className="font-regular bg-gray-200">
          <tr>
            <th className="text-left p-4">#</th>
            <th className="text-left p-4">Artist</th>
            <th className="text-left p-4">Real Name</th>
            <th className="text-left p-4">Label</th>
            <th className="text-left p-4">Url</th>
            <th className="text-left p-4">Published Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 capitalize">
          {data.map((artist, i) => (
            <tr key={i}>
              <td className="p-4 whitespace-nowrap">{i + 1}</td>
              <td className="p-4 whitespace-nowrap">{artist.artist_name}</td>
              <td className="p-4 whitespace-nowrap">{artist.real_name}</td>
              <td className="p-4 whitespace-nowrap">{artist.label}</td>
              <td className="p-4 whitespace-nowrap">{artist.url}</td>
              <td className="p-4 whitespace-nowrap">
                {artist.created_at.split("T")[0]}
              </td>
              <td className=" text-primary font-bold">
                <Link href={`/admin/artist/edit/${artist.url}`}>
                  <button>Edit</button>
                </Link>
              </td>
              <td className=" text-red-700 font-bold">
                <button onClick={() => deleteArtist(artist.url)}>Trash</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ArtistTable;
