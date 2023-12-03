import React from "react";
import AddArtist from "./AddArtist";
import QuickInfo from "./QuickInfo";
import LatestActivity from "./LatestActivity";
import withAuth from "../auth/withAuth";

const getAllArtist = async () => {
  const res = await fetch("http://localhost:4000/api/artist/", {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

const getAllSongs = async () => {
  const res = await fetch("http://localhost:4000/api/songs/", {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

const Homepage = async () => {
  const artists = await getAllArtist();
  const songs = await getAllSongs();
  return (
    <>
      <h1 className="my-6 text-4xl text-secondary font-semibold">Dashboard</h1>
      <div className="flex w-full gap-10">
        <div className="w-2/3">
          <section className="rounded-2xl shadow-md p-8 bg-white mb-10">
            <QuickInfo artists={artists} songs={songs} />
          </section>
          <section className="rounded-2xl shadow-md p-8 bg-white mb-10">
            <LatestActivity songs={songs} />
          </section>
        </div>
        <div className="w-2/4">
          <section className="rounded-2xl shadow-md p-8 bg-white">
            <AddArtist />
          </section>
        </div>
      </div>
    </>
  );
};

export default withAuth(Homepage);
