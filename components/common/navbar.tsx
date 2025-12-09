"use client";
import { useState } from "react";
import { Menu, Moon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Navbar = () => {
  const pathname = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm p-3 mx-auto ">
      <div className="max-w-7xl mx-auto w-full relative flex items-center justify-between   ">
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <img
              src="/rick-icon.svg"
              alt="icon"
              className="size-10 md:size-14"
            />
          </Link>
          <ul className="hidden md:flex gap-4 items-center font-semibold text-lg">
            <li className={`${pathname == "/" && "text-orange-500"} `}>
              <Link href={"/"}>Home</Link>
            </li>
            <li className={`${pathname == "/favorite" && "text-orange-500"} `}>
              <Link href={"/favorite"}>Favorite</Link>
            </li>
            <li className={`${pathname == "/episode" && "text-orange-500"} `}>
              <Link href={"/episode"}>Episode</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          {navbarOpen ? (
            <X
              onClick={() => setNavbarOpen(false)}
              className="transition-all duration-300"
            />
          ) : (
            <Menu
              onClick={() => setNavbarOpen(true)}
              className="transition-all duration-300 z-30"
            />
          )}
        </div>
        <ul
          className={`absolute w-full bg-white rounded-lg shadow-lg z-20 bottom-[-180px] flex flex-col gap-3 p-3 left-0 overflow-hidden transition-all font-semibold duration-300 md:hidden ${
            navbarOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-75 pointer-events-none"
          }`}
        >
          <li>
            <Link
              href={"/"}
              className={`${pathname == "/" && "text-orange-500"} `}
            >
              Home
            </Link>
          </li>
          <li>
            <Link href={"/episode"}>Episode</Link>
          </li>
          <li>
            <Link href={"/favorite"}>Favorite</Link>
          </li>
          <button>
            <Moon />
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
