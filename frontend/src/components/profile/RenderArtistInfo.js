import Image from "next/image";
import React from "react";
import Nav from "../Home/Nav.js";
import parse from "html-react-parser";
import RenderArtistBio from "./RenderArtistBio.js";
import RenderList from "./RenderList.js";

const RenderArtistInfo = ({ songs, artist, albums }) => {
  return (
    <div>
      <Nav />
      <RenderArtistBio artist={artist} />
      <div className="flex justify-between py-20  max-w-screen-xl mx-auto relative ">
        <section className="w-2/3">
          <h2>Artist Bio</h2>
          <div className="artist-bio">{parse(artist.bio)}</div>
          <div className="flex justify-between gap-10 mt-30">
            <RenderList data={songs} title="Top Songs" />
            <RenderList data={albums} title="Top Albums" />
          </div>
        </section>
        <section className="w-1/3 flex justify-center">
          <div className="sticky-banner">ADS</div>
        </section>
      </div>
    </div>
  );
};

export default RenderArtistInfo;
