"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  id: number;
  label: string;
  path: string;
}

const navLinks: NavLink[] = [
  { id: 1, label: "User", path: "/" },
  { id: 2, label: "Post", path: "/posts" },
  { id: 3, label: "Profile", path: "/profile" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="p-2 border-b border-slate-600">
      {navLinks.map(({ id, label, path }: NavLink) => (
        <Link key={id} href={path} className="mr-2">
          {label}
        </Link>
      ))}
    </div>
  );
}
