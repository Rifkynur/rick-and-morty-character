"use client";
import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useThemeStore } from "@/store/useThemeStore";
const Navbar = () => {
  const pathname = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const { theme, toggleTheme } = useThemeStore();
  return (
    <nav className="bg-white shadow-sm p-3 mx-auto  dark:bg-white/10">
      <div className="max-w-7xl mx-auto w-full relative flex items-center justify-between   ">
        <div className="flex items-center gap-4 w-full justify-between">
          <Link href={"/"}>
            <img
              src="/logo.png"
              alt="icon"
              className="size-10 md:size-14 dark:invert-100"
            />
          </Link>
          <ul className="hidden md:flex gap-4 items-center text-black font-semibold text-lg dark:text-white">
            <li className={`${pathname == "/" && "text-orange-500"} `}>
              <Link href={"/"}>Home</Link>
            </li>
            <li
              className={`${
                pathname?.includes("/favorite") && "text-orange-500"
              } `}
            >
              <Link href={"/favorite"}>Favorite</Link>
            </li>
            <li
              className={`${
                pathname?.includes("/episode") && "text-orange-500"
              } `}
            >
              <Link href={"/episode"}>Episode</Link>
            </li>
            <li
              onClick={() => toggleTheme()}
              className="text-black dark:text-white"
            >
              {theme == "dark" ? (
                <Sun className="size-6 cursor-pointer" />
              ) : (
                <Moon className="size-6 cursor-pointer" />
              )}
            </li>
          </ul>
        </div>
        <div className="md:hidden text-black">
          {navbarOpen ? (
            <X
              onClick={() => setNavbarOpen(false)}
              className="transition-all duration-300 dark:text-white"
            />
          ) : (
            <Menu
              onClick={() => setNavbarOpen(true)}
              className="transition-all duration-300 z-30 dark:text-white"
            />
          )}
        </div>
        <ul
          className={`absolute w-full bg-white text-black rounded-lg shadow-lg z-20 bottom-[-180px] flex flex-col gap-3 p-3 left-0 overflow-hidden transition-all font-semibold duration-300 md:hidden dark:bg-[#3c3e44] dark:text-white ${
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
            <Link
              href={"/episode"}
              className={`${
                pathname?.includes("/episode") && "text-orange-500"
              } `}
            >
              Episode
            </Link>
          </li>
          <li>
            <Link
              href={"/favorite"}
              className={`${
                pathname?.includes("/favorite") && "text-orange-500"
              } `}
            >
              Favorite
            </Link>
          </li>
          <button onClick={() => toggleTheme()}>
            {theme == "dark" ? (
              <Sun className="size-6 cursor-pointer" />
            ) : (
              <Moon className="size-6 cursor-pointer" />
            )}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
