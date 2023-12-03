import React from "react";
import Link from "next/link";

const SongTable = ({ data }) => {
  return (
    <>
      <h1 className="my-6 text-4xl text-secondary font-semibold m-0 p-0">
        Artists
      </h1>
      <div className="flex justify-end">
        <Link href="/admin/song/post-new">
          <button className="border-2 p-2 border-primary bg-text-primary text-sm text-primary">
            Add New Song
          </button>
        </Link>
      </div>
      <table className="min-w-full divide-y divide-gray-200 my-6 text-sm">
        <thead className="font-regular bg-gray-200">
          <tr>
            <th className="text-left p-4">#</th>
            <th className="text-left p-4">Artist</th>
            <th className="text-left p-4">Song Title</th>
            <th className="text-left p-4">Url</th>
            <th className="text-left p-4">Released Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 capitalize">
          {data?.map((song, i) => (
            <tr key={i}>
              <td className="p-4 whitespace-nowrap">{i + 1}</td>
              <td className="p-4 whitespace-nowrap">{song.artist_name}</td>
              <td className="p-4 whitespace-nowrap">{song.song_title}</td>
              <td className="p-4 whitespace-nowrap">{song.url}</td>
              <td className="p-4 whitespace-nowrap">{song.released}</td>
              <td className=" text-primary font-bold">
                <Link href={`/admin/song/edit/${song.url}`}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SongTable;
