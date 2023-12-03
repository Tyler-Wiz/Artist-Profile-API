"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaHome,
  FaPlus,
  FaChevronDown,
  FaUser,
  FaChevronUp,
} from "react-icons/fa";

const data = [
  { name: "Song", path: "/" },
  { name: "Artist", path: "/" },
  { name: "Album", path: "/" },
  { name: "Media", path: "/" },
  { name: "User", path: "/" },
];

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-secondary text-text-primary capitalize text-sm">
      <Link href="/" className="flex gap-3">
        <FaHome size={20} />
        <p>View Website</p>
      </Link>
      <div className="relative">
        <div
          className="flex relative gap-3 z-50 cursor-pointer"
          onClick={() => setToggleMenu(!toggleMenu)}>
          <FaPlus size={20} />
          <p>create New</p>
          {toggleMenu ? <FaChevronDown size={20} /> : <FaChevronUp size={20} />}
        </div>
        <div
          className={`absolute z-10 bg-secondary w-[200px] px-3 py-6 flex flex-col duration-300 ${
            toggleMenu ? "top-[-200px]" : "top-6"
          }`}>
          {data.map((item, i) => (
            <Link
              href={item.path}
              key={i}
              className={`mt-4 ${toggleMenu ? "opacity-0" : "z-20"}`}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <Link href="/" className="flex gap-3">
        <p>Howdy "user"</p>
        <FaUser size={20} />
      </Link>
    </nav>
  );
};

export default Nav;
