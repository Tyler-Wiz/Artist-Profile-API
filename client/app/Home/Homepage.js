import React from "react";
import Nav from "../components/Nav";
import SearchByLetters from "../components/SearchByLetters";

const getAllArtists = async () => {
  const res = await fetch(`http://localhost:4000/api/artist/`, {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

const Homepage = async () => {
  const artists = await getAllArtists();

  return (
    <div className="">
      <Nav />
      <SearchByLetters data={artists} />
    </div>
  );
};

export default Homepage;
