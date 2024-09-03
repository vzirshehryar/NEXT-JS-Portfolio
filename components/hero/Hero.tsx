import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <section
            className="my_section bg-primary2 h-screen flex flex-col justify-center items-center"
            id="HERO"
        >
            <div className="text-center text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] m-0 mb-3">
                Hey.
            </div>
            <div className="text-center font-bold text-[35px] sm:text-[45px] md:text-[60px] lg:text-[70px] m-0">
                {"I'm Wazir Shehryar"}
            </div>
            <div className="text-center text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] m-0 mb-3">
                Full Stack <span className="text-[#D32D20]">Developer|</span>
            </div>
            <p className="text-center max-w-[800px] mx-auto mb-8">
                A dedicated Full-Stack Developer with a passion for crafting
                innovative and efficient software solutions. With 3 years of
                experience in developing dynamic web applications across various
                domains, I bring a unique blend of technical expertise and
                creative problem-solving. Currently, I am focused on helping
                startups and established businesses turn their digital visions
                into reality, leveraging cutting-edge technologies
            </p>
            <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-10">
                <button className="bg-[#7731FF] p-2 lg:px-4 lg:py-3 rounded-lg shadow-2xl hover:bg-[#7711FF] font-semibold">
                    <a
                        href="/WazirResume.pdf"
                        download="WazirResume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Resume
                    </a>
                </button>
                <button className="bg-[#7731FF] p-2 lg:px-4 lg:py-3 rounded-lg shadow-2xl hover:bg-[#7711FF] font-semibold">
                    <Link rel="stylesheet" href="/about">
                        Learn More About Me
                    </Link>
                </button>
            </div>
        </section>
    );
};

export default Hero;
