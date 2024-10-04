import { GitHubIcon, RecordedVideo, RedirectIcon } from "@/svgIcons";
import Image from "next/image";
import React from "react";

type typeOfProjects = {
    image: string;
    title: string;
    description: string;
    tags: string[];
    liveLink?: string;
    githubLink?: string;
    recordedVideoLink?: string;
};

const PROJECTS: typeOfProjects[] = [
    {
        image: "/projectImages/PenPulseAI.png",
        title: "PenPulse AI",
        description:
            "This is an app for creating blogs using AI and uploading the blogs on Shopify and Wordpress in one click.",
        tags: [
            "Next.js",
            "Tailwind CSS",
            "Typescript",
            "PostgreSQL",
            "Prisma",
            "AWS S3",
            "VPS",
        ],
        liveLink: "https://app.penpulseai.com",
    },
    {
        image: "/projectImages/Recruito.png",
        title: "Recruito",
        description:
            "This is an app for companies to hire and job seeker to apply for jobs.",
        tags: [
            "React.js",
            "Tailwind CSS",
            "Javascript",
            "Mongo DB",
            "REST APIs",
            "Vercel",
            "AWS",
        ],
        githubLink: "https://github.com/vzirshehryar/Recruitor_App",
        recordedVideoLink:
            "https://drive.google.com/file/d/1vQB4RMNKh5NixQAEIRgZrPNY8bgGIOuE/view?usp=drive_link",
    },
    {
        image: "/projectImages/PhotoEditor.png",
        title: "Photo Editor",
        description:
            "This is a where user can upload there picture and edit the picture they want and then download it",
        tags: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase",
            "Atlas",
            "Flask",
        ],
        githubLink: "https://github.com/vzirshehryar/Photo-Editor-App",
    },
    {
        image: "/projectImages/Antematter.png",
        title: "Antematter Frontend",
        description:
            "This is a Frontend project where I converted into Figma design to a website",
        tags: ["React.js", "Tailwind CSS", "APIs", "Blockchain", "Solana"],
        githubLink: "https://github.com/vzirshehryar/Antematter-Frontend-Test",
    },
    {
        image: "/projectImages/Portfolio.png",
        title: "Portfolio",
        description: "This is my Portfolio",
        tags: ["Next.js", "Tailwind CSS", "Typescript", "Vercel"],
        liveLink: "https://vzirshehryar.vercel.app",
        githubLink: "https://github.com/vzirshehryar/NEXT-JS-Portfolio",
    },
];

const Projects = () => {
    return (
        <section className="my_section bg-primary2" id="projects">
            <h1>Projects</h1>
            <div className="p-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {PROJECTS.map((project, ind) => {
                    return <Project key={ind} {...project} />;
                })}
            </div>
        </section>
    );
};

export default Projects;

function Project({
    image,
    title,
    description,
    tags,
    liveLink,
    githubLink,
    recordedVideoLink,
}: typeOfProjects) {
    return (
        <div className="bg-[#131724] p-6 rounded-lg shadow-lg w-full flex flex-col justify-between">
            <div>
                <div className="relative group">
                    <Image
                        style={{ aspectRatio: "4/3" }}
                        src={image}
                        alt={title}
                        width={400}
                        height={400}
                        className=" w-full rounded-sm object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm text-white rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <a
                            href={
                                liveLink
                                    ? liveLink
                                    : recordedVideoLink
                                    ? recordedVideoLink
                                    : githubLink
                                    ? githubLink
                                    : ""
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-5 rounded-xl bg-[#ecf0f490]"
                        >
                            <RedirectIcon />
                        </a>
                    </div>
                </div>
                <p className="text-lg font-bold mt-2">{title}</p>
                <p className="text-base">{description}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                    {tags.map((tag, ind) => {
                        return (
                            <p
                                key={ind}
                                className="text-xs text-white bg-[#637381] rounded-md px-1 py-0.5"
                            >
                                {tag}
                            </p>
                        );
                    })}
                </div>
            </div>
            <div className="flex justify-end gap-3 justify-items-end">
                {githubLink!! && (
                    <button>
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub Repository"
                        >
                            <GitHubIcon size="23" fill="white" />
                        </a>
                    </button>
                )}
                {recordedVideoLink!! && (
                    <button>
                        <a
                            href={recordedVideoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Recorded Video"
                        >
                            <RecordedVideo size="20" fill="white" />
                        </a>
                    </button>
                )}
                {liveLink!! && (
                    <button>
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Live Link"
                        >
                            <RedirectIcon size="20" fill="white" />
                        </a>
                    </button>
                )}
            </div>
        </div>
    );
}
