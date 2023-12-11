import Image from "next/image";
import Link from "next/link";
import React from "react";

const RenderArtistList = ({ artists }) => {
  return (
    <>
      <h2 className="text-center text-xl my-10 relative uppercase">Artist</h2>
      {artists && (
        <ul className="flex flex-wrap gap-10 justify-center">
          {artists.map((artist, i) => (
            <li key={i} className="text-black">
              <Link href={`/profile/${artist.url}`}>
                <div className="relative h-48 w-48 border-1 object-cover">
                  <Image src={artist.image} fill={true} alt="artist image" />
                </div>
              </Link>
              <p className="text-center text-xl font-medium my-3">
                {artist.artist}
              </p>
              <p className="text-center text-xs font-medium my-3">
                {artist.label}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default RenderArtistList;
