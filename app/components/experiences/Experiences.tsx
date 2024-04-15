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
      <div className="pl-[20px]">
        <div className="border-l-white border-l-[2px] relative flex flex-col gap-5">
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
      <div className="absolute left-[-24px] top-[30px] w-12 h-12 rounded-full -500 flex justify-center items-center border-white border-[2px]">
        <Image
          className="rounded-full"
          src={logo}
          alt="logo"
          width={48}
          height={48}
        />
      </div>
      <div className="bg-[#3A3F50] ml-8 p-6 rounded-2xl shadow-2xl relative">
        <h3 className="mb-2">{jobTitle}</h3>
        <div className="flex gap-2 items-center mb-1">
          <h4 className="font-semibold text-[18px]">{companyName}</h4>
          <span className="text-slate-300 text-[14px] ">{date}</span>
        </div>
        <ul>
          {tasks.map((task, key) => (
            <li key={key} className="list-disc ml-4">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
