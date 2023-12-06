import Image from "next/image";
import React from "react";
import Nav from "./Nav";
import parse from "html-react-parser";

const RenderArtistInfo = ({ songs, artist }) => {
  return (
    <div>
      <Nav />
      <div className="flex justify-between p-10">
        <section className="w-2/3">
          <h2>Artist Bio</h2>
          <div className="artist-bio">{parse(artist.bio)}</div>
          <div>
            <div>
              {Array.isArray(songs) && (
                <ul>
                  <h2>Top Songs</h2>
                  <hr />
                  {songs?.map((song, i) => (
                    <li key={i} className="flex gap-3 w-70 items-center">
                      <div className="relative h-36 w-36 border-1 my-2">
                        <Image
                          src={song.image}
                          fill={true}
                          alt="artist image"
                          objectFit="cover"
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="text-sm">{song.title}</p>
                        <p className="text-xs">{song.released}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
        <section className="w-1/3 flex justify-center sticky">
          <div className="h-[600px] w-[300px] border-4"></div>
        </section>
      </div>
    </div>
  );
};

export default RenderArtistInfo;
