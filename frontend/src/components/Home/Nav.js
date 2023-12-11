"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaSearch, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { useRouter } from "next/navigation";

const navData = [
  { name: "Artists", path: "" },
  { name: "Top 100", path: "" },
];
const navSocial = [
  { icon: <FaFacebook size={30} />, path: "" },
  { icon: <FaTwitter size={30} />, path: "" },
  { icon: <FaInstagram size={30} />, path: "" },
];

const Nav = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const router = useRouter();

  return (
    <nav className="flex justify-between items-center px-16 py-4 text-white pt-10 pb-10 bg-black ">
      <Link href="/" onClick={() => router.refresh()}>
        <Image src="/logo.webp" width={90} height={90} />
      </Link>
      <ul className="flex gap-5 text-xl uppercase font-bold ">
        {navData.map((item, i) => (
          <li key={i} className="hover:text-red-600">
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-10 items-center relative">
        <ul className="flex gap-4 text-white">
          {navSocial.map((social, i) => (
            <li key={i} className="hover:text-red-600">
              <Link href={social.path}>{social.icon}</Link>
            </li>
          ))}
        </ul>
        <FaSearch
          size={25}
          onClick={() => setOpenSearch(!openSearch)}
          className="cursor-pointer"
        />
        {openSearch && (
          <div className="flex gap-3 items-center absolute right-60">
            <form>
              <input
                className="w-[230px] px-2 py-1 text-black  outline-none"
                placeholder="Search"
              />
            </form>
            <IoIosCloseCircle
              size={35}
              onClick={() => setOpenSearch(false)}
              className="cursor-pointer"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
