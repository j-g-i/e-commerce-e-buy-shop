"use client";

import Link from "next/link";
import NavLink from "./navLink/navLink";
import { useState } from "react";

const Links = () => {
  const links = [
    {
      title: "categories",
      path: "/categories",
    },
    {
      title: "Collections",
      path: "/collections",
    },
    {
      title: "Store",
      path: "/store",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Find Store",
      path: "/find store",
    },
  ];

  const [open, setOpen] = useState(false);

  const openStateHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="hidden md:flex md:align-center md:gap-10">
        {links.map((link) => (
          <NavLink item={link} key={link.title} scroll={false}/>
        ))}
      </div>
      <button className="md:hidden" onClick={openStateHandler}>
        Menu
      </button>
      {open && (
        <div className="md:hidden cursor-pointer flex flex-col items-center justify-center gap-2 absolute top-24 right-0 w-1/2 h-screen bg-cyan-300">
          {links.map((link) => (
            <NavLink item={link} key={link.title} scroll={false} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
