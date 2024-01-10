import Link from "next/link";
import React from "react";

const Navbar = () => {
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
            className="text-xl text-zinc-700 hover:text-zinc-900 transition-colors"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
