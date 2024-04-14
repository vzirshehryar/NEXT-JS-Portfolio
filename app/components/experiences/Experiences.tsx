import Image from "next/image";
import React from "react";

const EXPERIENCES = [
  {
    companyName: "Antematter",
    jobTitle: "Software Engineer",
    date: "01/2023 - Present",
    tasks: [
      "Working as a Full Stack Developer",
      " Website - Made the company website scalable and added new features",
      "Elevate - A tinder-esque hiring platform making it more fun to apply to jobs",
    ],
    logo: "/images/antematter_logo.jpeg",
  },
  {
    companyName: "Soltridge",
    jobTitle: "Full Stack Developer",
    date: "06/2022 - 10/2022",
    tasks: [
      "Working as a Full Stack Developer",
      " Website - Made the company website scalable and added new features",
      "Elevate - A tinder-esque hiring platform making it more fun to apply to jobs",
    ],
    logo: "/images/Logo.jpg",
  },
];

const Experiences = () => {
  return (
    <section className="my_section bg-primary2" id="EXPERIENCE">
      <h1>Experience</h1>
      <div className="pl-[40px]">
        <div className="border-l-white border-l-[3px] relative flex flex-col gap-5">
          <Box {...EXPERIENCES[0]} />
          <Box {...EXPERIENCES[1]} />
        </div>
      </div>
    </section>
  );
};

export default Experiences;

const Box = ({
  companyName,
  jobTitle,
  date,
  tasks,
  logo,
}: {
  companyName: string;
  jobTitle: string;
  date: string;
  tasks: string[];
  logo: string;
}) => {
  return (
    <div className="relative">
      <div className="absolute left-[-33px] top-[13%] w-16 h-16 rounded-full -500 flex justify-center items-center border-white border-[2px]">
        <Image
          className="rounded-full"
          src={logo}
          alt="logo"
          width={64}
          height={64}
        />
      </div>
      <div className="bg-primary ml-10 p-5 rounded-2xl shadow-2xl relative">
        <h3>{jobTitle}</h3>
        <h4>{companyName}</h4>
        <span>{date}</span>
        <ul>
          {tasks.map((task, key) => (
            <li key={key} className="list-disc">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
