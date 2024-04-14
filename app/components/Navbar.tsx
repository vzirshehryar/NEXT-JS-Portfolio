"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [navbar, setNavbar] = useState(-400);

  const inOutNavbar = () => {
    if (navbar === -400) {
      setNavbar(60);
    } else {
      setNavbar(-400);
    }
  };
  return (
    <nav className="navbar_shadow flex justify-between items-center min-w-[300px] w-[75%] sm:w-[560px] lg:w-[900px] fixed left-1/2 transform -translate-x-1/2 z-10 top-9 bg-secondary text-secondary p-1.5 rounded-full bg-opacity-70 px-5 py-2.5">
      <div className="">
        <Link href="#HERO">
          <Image
            src="/images/logoblue.png"
            alt="Wazir Shehryar Ali"
            width="35"
            height="35"
          />
        </Link>
      </div>
      <div className="hidden sm:flex gap-1">
        <Link
          className={`px-2 py-1 rounded-md text-lg hover:bg-secondaryHover font-semibold transition-[1s]`}
          href="#ABOUT"
          onClick={() => setNavbar(-400)}
        >
          About
        </Link>
        <Link
          className={`px-2 py-1 rounded-md text-lg hover:bg-secondaryHover font-semibold transition-[1s]`}
          href="#EXPERIENCE"
          onClick={() => setNavbar(-400)}
        >
          Experience
        </Link>
        <Link
          className={`px-2 py-1 rounded-md text-lg hover:bg-secondaryHover font-semibold transition-[1s]`}
          href="#SKILLS"
          onClick={() => setNavbar(-400)}
        >
          Skills
        </Link>
        <Link
          className={`px-2 py-1 rounded-md text-lg hover:bg-secondaryHover font-semibold transition-[1s]`}
          href="#PROJECTS"
          onClick={() => setNavbar(-400)}
        >
          Projects
        </Link>
        <Link
          className={`px-2 py-1 rounded-md text-lg hover:bg-secondaryHover font-semibold transition-[1s]`}
          href="#CONTACT"
          onClick={() => setNavbar(-400)}
        >
          Contact Me
        </Link>
      </div>
      <div onClick={inOutNavbar} className="block sm:hidden">
        {navbar === -400 ? (
          <Image
            className="ml-4"
            src="/icons/Hamburger Menu.svg"
            alt=""
            width={30}
            height={30}
          />
        ) : (
          <Image
            className="ml-4"
            src="/icons/Cross.svg"
            alt=""
            width={30}
            height={30}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
