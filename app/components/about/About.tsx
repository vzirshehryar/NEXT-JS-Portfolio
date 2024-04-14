import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="my_section bg-primary1" id="ABOUT">
      <h1>About Me</h1>
      <div className="grid grid-col-1 md:grid-cols-2 gap-8 place-items-center px-5 md:px-8">
        <Image
          className="w-300px lg:w-[500px] rounded-lg drop-shadow-2xl"
          src="/images/shery.png"
          alt="shery"
          width={300}
          height={300}
        />
        <div className="h-full flex flex-col justify-between items-center py-3 gap-2">
          <p className="text-center">
            I am actively seeking opportunities to apply my acquired skills and
            knowledge to real-world projects. My educational background has
            equipped me with a solid foundation in AI and ML algorithms, data
            analysis, and programming languages such as Python. Additionally, I
            have gained practical experience through hands-on projects, both
            independently and collaboratively.
          </p>
          <button className="min-w-[200px] bg-[#7731FF] px-4 py-2 rounded-lg shadow-2xl hover:bg-[#7711FF]">
            Learn More About Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
