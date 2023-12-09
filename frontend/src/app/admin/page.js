import Homepage from "@/components/admin/Home/Homepage";
import React from "react";
import getAllArtist from "@/services/api/artist/getAllArtist";
import getAllSongs from "@/services/api/songs/getAllSongs";

const page = async () => {
  const artists = await getAllArtist();
  const songs = await getAllSongs();

  return <Homepage artists={artists} songs={songs} />;
};

export default page;
