import React from "react";
import RenderArtistInfo from "@/components/profile/RenderArtistInfo";
import getArtistById from "@/services/api/artist/getArtistById";
import getSongsByArtist from "@/services/api/songs/getSongsByArtist";
import getAlbumsByArtist from "@/services/api/albums/getAlbumsByArtist";

export async function generateMetadata({ params }) {
  // read route params
  const id = params.id;
  // fetch data
  const artist = await getArtistById(id);
  return {
    title: artist.artist_name,
  };
}

const page = async ({ params }) => {
  const artistId = params.id;
  const artist = await getArtistById(artistId);
  const songs = await getSongsByArtist(artist.id);
  const albums = await getAlbumsByArtist(artist.id);
  return (
    <div>
      <RenderArtistInfo songs={songs} artist={artist} albums={albums} />
    </div>
  );
};

export default page;
