"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// ... (imports and usePathname)

const Navbar = () => {
  const currentPathName = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex gap-12 px-8 h-16 border-b items-center">
      <Link className="text-3xl" href={"/"}>
        Logo
      </Link>
      <ul className="flex gap-3">
        {links.map((link) => (
          <li
            key={link.href}
            className={`${
              link.href === currentPathName ||
              link.href === `${currentPathName}/`
                ? "text-zinc-950"
                : "text-zinc-600"
            } text-xl hover:text-zinc-900 transition-colors`}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
