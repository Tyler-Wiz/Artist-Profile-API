import React from "react";
import RenderArtistInfo from "../../components/RenderArtistInfo";

const getArtist = async (id) => {
  const res = await fetch(`http://localhost:4000/api/artist/${id}`, {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

const getSongsByArtist = async (id) => {
  const res = await fetch(`http://localhost:4000/api/songs/all/${id}`, {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const artistId = params.id;
  const artist = await getArtist(artistId);
  const songs = await getSongsByArtist(artist.id);
  return (
    <div>
      <RenderArtistInfo songs={songs} artist={artist} />
    </div>
  );
};

export default page;
