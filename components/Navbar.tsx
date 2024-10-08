"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [navbar, setNavbar] = useState(-400);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible =
                prevScrollPos > currentScrollPos || currentScrollPos === 0;
            setPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    const inOutNavbar = () => {
        if (navbar === -400) {
            setNavbar(60);
        } else {
            setNavbar(-400);
        }
    };
    return (
        <nav
            style={{ top: visible ? "36px" : "-300px", transition: "0.3s" }}
            // style={visible ? { top: "36px" } : { top: "-300px" }}
            className="navbar_shadow flex justify-between items-center min-w-[300px] w-[75%] sm:w-[560px] lg:w-[900px] fixed left-1/2 transform -translate-x-1/2 z-10 top-9 bg-[#f6f6f695] text-secondary p-1.5 rounded-full px-5 py-2.5 drop-shadow-2xl backdrop-blur-sm"
        >
            <div className="">
                <Link href="#HERO">
                    <Image
                        src="/myNewLogo.png"
                        alt="Wazir Shehryar Ali"
                        width="35"
                        height="35"
                    />
                </Link>
            </div>
            <div className="hidden sm:flex gap-1">
                <Link
                    className={`px-2 py-1 rounded-md text-lg hover:bg-[#f6f6f650] font-semibold transition-[1s]`}
                    href="#about"
                    onClick={() => setNavbar(-400)}
                >
                    About
                </Link>
                <Link
                    className={`px-2 py-1 rounded-md text-lg hover:bg-[#f6f6f650] font-semibold transition-[1s]`}
                    href="#experiences"
                    onClick={() => setNavbar(-400)}
                >
                    Experience
                </Link>
                <Link
                    className={`px-2 py-1 rounded-md text-lg hover:bg-[#f6f6f650] font-semibold transition-[1s]`}
                    href="#skills"
                    onClick={() => setNavbar(-400)}
                >
                    Skills
                </Link>
                <Link
                    className={`px-2 py-1 rounded-md text-lg hover:bg-[#f6f6f650] font-semibold transition-[1s]`}
                    href="#projects"
                    onClick={() => setNavbar(-400)}
                >
                    Projects
                </Link>
                <Link
                    className={`px-2 py-1 rounded-md text-lg hover:bg-[#f6f6f650] font-semibold transition-[1s]`}
                    href="#contact"
                    onClick={() => setNavbar(-400)}
                >
                    Contact Me
                </Link>
            </div>
            {/* <div onClick={inOutNavbar} className="block sm:hidden">
                {navbar === -400 ? (
                    <Image
                        className="ml-4"
                        src="/icons/Hamburger Menu.svg"
                        alt=""
                        width={28}
                        height={28}
                    />
                ) : (
                    <Image
                        className="ml-4"
                        src="/icons/Cross.svg"
                        alt=""
                        width={28}
                        height={28}
                    />
                )}
            </div> */}
        </nav>
    );
};

export default Navbar;
