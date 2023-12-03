"use client";

import React, { useState } from "react";
import { MdDashboard, MdOutlinePermMedia } from "react-icons/md";
import { IoMdAlbums, IoMdMusicalNote } from "react-icons/io";
import { FaUsers, FaCircleChevronLeft } from "react-icons/fa6";
import { TiPin } from "react-icons/ti";
import Link from "next/link";

const sideBarList = [
  { name: "Dashboard", icon: <MdDashboard size={30} />, path: "/admin" },
  { name: "Song", icon: <TiPin size={30} />, path: "/admin/song" },
  {
    name: "Artist",
    icon: <IoMdMusicalNote size={30} />,
    path: "/admin/artist",
  },
  { name: "Albums", icon: <IoMdAlbums size={30} />, path: "" },
];

const sideBarExtras = [
  { name: "Media", icon: <MdOutlinePermMedia size={30} />, path: "" },
  { name: "Users", icon: <FaUsers size={30} />, path: "" },
];

const Sidebar = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };
  return (
    <aside
      className={`text-text-primary text-lg w-1/5 bg-secondary shadow-lg border-r-2 border-text-primary duration-300  ${
        isSidebarCollapsed ? "w-[80px] p-6" : "w-[200px] p-6"
      }`}>
      <p>LOGO</p>
      <div className="mt-10">
        {sideBarList.map((item, i) => (
          <Link href={item.path} key={i} className="flex gap-2 my-4 ">
            <p>{item.icon}</p>
            {isSidebarCollapsed ? "" : <p>{item.name}</p>}
          </Link>
        ))}
      </div>
      <div className="my-28 border-t-2 py-4">
        {sideBarExtras.map((item, i) => (
          <Link href={item.path} key={i} className="flex gap-2 my-4">
            <p>{item.icon}</p>
            {isSidebarCollapsed ? "" : <p>{item.name}</p>}
          </Link>
        ))}
      </div>
      <button
        onClick={handleToggleSidebar}
        className="flex gap-3 items-center mt-60 justify-center"
        href="/">
        <FaCircleChevronLeft size={20} />
        {isSidebarCollapsed ? "" : <p>Collapse</p>}
      </button>
    </aside>
  );
};

export default Sidebar;
