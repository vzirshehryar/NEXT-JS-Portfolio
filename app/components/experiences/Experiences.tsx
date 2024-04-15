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

type typeOfExperience = {
  companyName: string;
  jobTitle: string;
  date: string;
  tasks: string[];
  logo: string;
  left?: boolean;
};

const Experiences = () => {
  return (
    <section
      className="my_section bg-primary2 grid place-items-center"
      id="EXPERIENCE"
    >
      <h1 className="w-full">Experience</h1>
      <div className="pl-[20px] md:hidden">
        <div className="border-l-white border-l-[2px] relative flex flex-col gap-5">
          <MobileView {...EXPERIENCES[0]} />
          <MobileView {...EXPERIENCES[1]} />
        </div>
      </div>
      <div className="relative hidden md:grid gap-5 grid-cols-2 max-w-[1200px]">
        <div className="border-white border-[2px] absolute h-full left-[calc(50%-1px)]"></div>
        <DesktopView {...EXPERIENCES[0]} left={true} />
        <div></div>
        <div></div>
        <DesktopView {...EXPERIENCES[1]} left={false} />
      </div>
    </section>
  );
};

export default Experiences;

const MobileView = (props: typeOfExperience) => {
  return (
    <div className="relative">
      <div className="absolute left-[-24px] top-[30px] w-12 h-12 rounded-full -500 flex justify-center items-center border-white border-[2px]">
        <Image
          className="rounded-full"
          src={props.logo}
          alt="logo"
          width={48}
          height={48}
        />
      </div>
      <Box {...props} />
    </div>
  );
};

const DesktopView = (props: typeOfExperience) => {
  return (
    <div className={`relative`}>
      <div
        className={`absolute ${
          props.left ? "right-[-42px]" : "left-[-42px]"
        } top-[30px] w-16 h-16 rounded-full -500 flex justify-center items-center border-white border-[2px]`}
      >
        <Image
          className="rounded-full"
          src={props.logo}
          alt="logo"
          width={64}
          height={64}
        />
      </div>
      <Box {...props} />
    </div>
  );
};

const Box = (props: typeOfExperience) => {
  return (
    <div
      className={`bg-[#3A3F50] ${
        props.left ? "mr-8" : "ml-8"
      } p-6 rounded-2xl shadow-2xl relative`}
    >
      <h3 className="mb-2">{props.jobTitle}</h3>
      <div className="flex gap-2 items-center mb-1">
        <h4 className="font-semibold text-[18px]">{props.companyName}</h4>
        <span className="text-slate-300 text-[14px] ">{props.date}</span>
      </div>
      <ul>
        {props.tasks.map((task, key) => (
          <li key={key} className="list-disc ml-4">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};
