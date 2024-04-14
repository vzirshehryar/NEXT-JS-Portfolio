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
        I'm Wazir Shehryar
      </div>
      <div className="text-center text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] m-0 mb-3">
        Full Stack <span className="text-[#D32D20]">Developer|</span>
      </div>
      <p className="text-center max-w-[600px] mx-auto mb-8">
        A highly motivated student studying Artificial Intelligence and Machine
        Learning. Actively seeking opportunities to apply my skills and
        knowledge to real-world projects and contribute to the advancement of
        the industry. And I am working as a Software Engineer at Antematter.
      </p>
      <button className="bg-[#7731FF] px-4 py-2 rounded-lg shadow-2xl hover:bg-[#7711FF]">
        Download Resume
      </button>
    </section>
  );
};

export default Hero;
