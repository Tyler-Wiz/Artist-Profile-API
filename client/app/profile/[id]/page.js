import React from "react";
import RenderArtistInfo from "../../components/profile/RenderArtistInfo";

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

const getAlbumsByArtist = async (id) => {
  const res = await fetch(`http://localhost:4000/api/albums/artist/${id}`, {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  // read route params
  const id = params.id;
  // fetch data
  const artist = await getArtist(id);
  return {
    title: artist.artist_name,
  };
}

const page = async ({ params }) => {
  const artistId = params.id;
  const artist = await getArtist(artistId);
  const songs = await getSongsByArtist(artist.id);
  const albums = await getAlbumsByArtist(artist.id);
  console.log(songs);
  return (
    <div>
      <RenderArtistInfo songs={songs} artist={artist} albums={albums} />
    </div>
  );
};

export default page;
