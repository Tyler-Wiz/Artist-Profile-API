import Image from "next/image";
import React from "react";
import Nav from "../navbar/Nav.js";
import parse from "html-react-parser";
import RenderArtistBio from "./RenderArtistBio.js";

const RenderArtistInfo = ({ songs, artist, albums }) => {
  return (
    <div>
      <Nav />
      <RenderArtistBio artist={artist} />
      <div className="flex justify-between py-10 max-w-screen-xl mx-auto relative">
        <section className="w-2/3">
          <h2>Artist Bio</h2>
          <div className="artist-bio">{parse(artist.bio)}</div>
          <div className="flex justify-between gap-10">
            <div className="w-1/2">
              {Array.isArray(songs) && (
                <ul>
                  <h2 className="uppercase">Top Songs</h2>
                  {songs.map((song, i) => (
                    <li key={i} className="list-container">
                      <div className="relative w-36 h-36">
                        <Image
                          src={song.image}
                          fill={true}
                          alt="artist image"
                          objectFit="cover"
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-2/3">
                        <p className="text-2xl">{song.title}</p>
                        <p className="text-lg">{song.artist}</p>
                        <p className="text-sm text-right opacity-60">
                          {song.released}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="w-1/2">
              {Array.isArray(albums) && (
                <ul>
                  <h2 className="uppercase">Top Albums</h2>
                  {albums.map((album, i) => (
                    <li key={i} className="list-container">
                      <div className="relative w-36 h-36">
                        <Image
                          src={album.image}
                          fill={true}
                          alt="artist image"
                          objectFit="cover"
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-2/3">
                        <p className="text-2xl">{album.title}</p>
                        <p className="text-lg">{album.artist}</p>
                        <p className="text-sm text-right opacity-60">
                          {album.released}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
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
