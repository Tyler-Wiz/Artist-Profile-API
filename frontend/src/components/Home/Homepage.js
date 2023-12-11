import React from "react";
import Nav from "./Nav";
import SearchByLetters from "./SearchByLetters";
import getAllArtist from "@/services/api/artist/getAllArtist";

const Homepage = async () => {
  const artists = await getAllArtist();
  return (
    <div className="">
      <Nav />
      <SearchByLetters data={artists} />
    </div>
  );
};

export default Homepage;
