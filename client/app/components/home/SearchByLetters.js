"use client";

import React, { useState } from "react";
import RenderArtistList from "./RenderArtistList";

const SearchByLetters = ({ data }) => {
  // Generate an array containing A to Z
  const lettersArray = [];
  for (let i = 65; i <= 90; i++) {
    lettersArray.push(String.fromCharCode(i));
  }
  // Get all Artists and filter through based on first letter
  const [allArtists, setAllArtists] = useState(data);
  const filterArtists = (targetLetter) => {
    const filteredData = data.filter(
      (item) => item.artist.charAt(0).toUpperCase() === targetLetter
    );
    setAllArtists(filteredData);
  };
  // Switch between styles
  const [active, setActive] = useState("");
  return (
    <>
      <ul className="flex text-xl text-white bg-black py-10 justify-center font-bold">
        {lettersArray.map((letter, index) => (
          <li
            key={index}
            className={`cursor-pointer px-4 py-2 ${
              letter === active ? "bg-red-600" : "hover:text-red-600"
            }`}
            onClick={() => {
              filterArtists(letter);
              setActive(letter);
            }}>
            {letter}
          </li>
        ))}
      </ul>
      <div className="p-6">
        <RenderArtistList artists={allArtists} />
      </div>
    </>
  );
};

export default SearchByLetters;
