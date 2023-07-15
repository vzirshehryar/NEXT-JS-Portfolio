"use client";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import Styles from "./navbar.module.css";

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
    <nav className={Styles.navbar}>
      <div className={Styles.logo}>
        <img src="/images/Logo.jpg" alt="Wazir Shehryar Ali" width={60} />
      </div>
      <div className={Styles.box} style={{ top: navbar }}>
        <Link
          className={Styles.link}
          href="/about"
          onClick={() => setNavbar(-400)}
        >
          About
        </Link>
        <Link
          className={Styles.link}
          href="/skills"
          onClick={() => setNavbar(-400)}
        >
          Skills
        </Link>
        <Link
          className={Styles.link}
          href="/projects"
          onClick={() => setNavbar(-400)}
        >
          Projects
        </Link>
        <Link
          className={Styles.link}
          href="/contact"
          onClick={() => setNavbar(-400)}
        >
          Contact Me
        </Link>
      </div>
      <div className={Styles.threeBar} onClick={inOutNavbar}>
        {navbar === -400 ? <FaBars /> : <FaTimes />}
      </div>
    </nav>
  );
};

export default Navbar;
