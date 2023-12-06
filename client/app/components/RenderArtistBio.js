import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { calculateAge } from "../helpers/calculateAge";

const RenderArtistBio = ({ artist }) => {
  const age = calculateAge(artist.age);
  return (
    <section className="bg-black">
      <section className="artist-profile">
        <div className="artist_details">
          <div>
            <h4>Stage Name:</h4>
            <p>{artist.artist_name}</p>
          </div>
          <div>
            <h4>Real Name:</h4>
            <p>{artist.real_name}</p>
          </div>
          <div>
            <h4>Age:</h4>
            <p>
              {age} Years Old ({artist.age})
            </p>
          </div>
          <div>
            <h4>Hometown:</h4>
            <p>{artist.hometown}</p>
          </div>
          <div>
            <h4>Label:</h4>
            <p>{artist.label}</p>
          </div>
          <section className="artist_details--social">
            <Link href={artist.instagram} target="_blank">
              <FaInstagram size={30} />
            </Link>
            <Link href={artist.twitter} target="_blank">
              <FaTwitter size={30} />
            </Link>
          </section>
        </div>
        <div className="artist-featured--image">
          <Image src={artist.featured_image} fill={true} alt="artist image" />
        </div>
      </section>
    </section>
  );
};

export default RenderArtistBio;
