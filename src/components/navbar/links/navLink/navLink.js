"use client";


import { usePathname } from "next/navigation";
import Link from "next/link";

function NavLink({ item }) {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`p-1 ${pathName === item.path && "rounded-xl font-medium bg-sky-950 text-blue-900"}}`}
    >
      {item.title}
    </Link>
  );
}

export default NavLink;
