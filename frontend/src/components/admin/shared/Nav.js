"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaPlus,
  FaChevronDown,
  FaUser,
  FaChevronUp,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

const data = [
  { name: "Song", path: "/admin/song/post-new" },
  { name: "Artist", path: "/admin/artist/post-new" },
  { name: "Album", path: "/admin/album/post-new" },
  { name: "Media", path: "/" },
  { name: "User", path: "/" },
];

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [user, setUser] = useState("");

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      setUser(jwtDecode(token));
    }
  }, []);

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-secondary text-text-primary capitalize text-sm">
      <Link href="/" className="flex gap-3" aria-label="home-link">
        <FaHome size={20} />
        <p>View Website</p>
      </Link>
      <div className="relative">
        <div
          className="flex relative gap-3 z-50 cursor-pointer"
          onClick={() => setToggleMenu(!toggleMenu)}
          aria-label="create-new-post">
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
              className={`mt-4 ${toggleMenu ? "opacity-0" : "z-20"}`}
              aria-label="create-new-dropdown-menu">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <Link href="/" className="flex" aria-label="user">
        <p>Howdy,</p>
        {user && <p className="mr-2">{user.email.split("@")[0]}</p>}
        <FaUser size={20} />
      </Link>
    </nav>
  );
};

export default Nav;
