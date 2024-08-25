import { title } from "process";

export const EXPERIENCES = [
    {
        companyName: "Antematter",
        jobTitle: "Software Engineer",
        date: "01/2023 - Present",
        tasks: [
            "Building Web App using newest technologies.",
            "Building requirend React Libraries and SDK for Clients and for later use.",
            "Learning more new technologies and writing blogs on it.",
        ],
        logo: "/logos/antematter_logo.jpeg",
    },
    {
        companyName: "Soltridge",
        jobTitle: "Lead Full Stack Developer",
        date: "06/2022 - 10/2022",
        tasks: [
            "Building Web App using newest technologies.",
            "Helping junior developers to write better code.",
            "Deployed MERN App on Amplify, Vercel and also worked on deployment on Azure",
        ],
        logo: "/logos/Logo.jpg",
    },
    {
        companyName: "CENiT",
        jobTitle: "Mobile App Development Teacher",
        date: "06/2022 - 10/2022",
        tasks: [
            "Teaching Android App Development to Students",
            "Taught fundamentals of programming, OOP in java, SQLite Database, etc.",
            "Gave questions, gave bugs to solve, and solved problems of the studnets.",
        ],
        logo: "/logos/CENiT.png",
    },
    {
        companyName: "Fiverr",
        jobTitle: "Freelancer",
        date: "06/2020 - 06/2022",
        tasks: [
            "Providing services, of Grapic Design, Website Development",
            "Finding Bugs in code and solve bugs and problems",
            "Designing logos, posters, banners, etc",
        ],
        logo: "/logos/fiverr.jpeg",
    },
    {
        companyName: "FAST NUCES",
        jobTitle: "Teacher Assistant of Web Programming",
        date: "06/2023 - 12/2023",
        tasks: [
            "Helping teachers to make assignments, quizzes, and exams",
            "Helping students to solve their problems",
            "Helping students to understand the concepts of Web Programming",
        ],
        logo: "/logos/FASTNUCES_Logo.png",
    },
];

const PROGRAMMING_LANGUAGES = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "PHP",
    "HTML",
    "CSS",
];

const FRONTEND_TECHNOLOGIES = [
    "React JS",
    "Next JS",
    "TailwindCSS",
    "React Query",
    "Redux",
    "Zustand",
    "Material-UI",
    "ShadCN",
];

const BACKEND_TECHNOLOGIES = [
    "Node JS",
    "Express JS",
    "Mongoose",
    "Prisma",
    "Flask",
    "Pandas",
];

const DATABASES = ["MongoDB", "MySQL", "PostgreSQL", "SQLite"];

const AWS_SERVICES = ["Amplify", "S3 Storage", "EC2 Instance"];

const DEVOPS_TOOLS = ["Git", "GitHub", "Docker", "GitHub Actions"];

const INTEGRATIONS = ["Stripe", "Google Auth", "Firebase", "Plaid"];

const IDES = [
    "VS Code",
    "Visual Studio",
    "PyCharm",
    "IntelliJ IDEA",
    "Android Studio",
];

const DEPLOYMENTS = ["Vercel", "Vultr VPC", "AWS EC2", "AWS Amplify"];

const OTHER_SOFTWARES = ["Jira", "Postman", "Figma", "Latex"];

const OPERATING_SYSTEMS = ["Windows", "Linux", "MacOS"];

export const SKILLS = [
    {
        title: "Programming Languages",
        array: PROGRAMMING_LANGUAGES,
        image: "/skillLogos/programming.png",
    },
    {
        title: "Frontend Technologies",
        array: FRONTEND_TECHNOLOGIES,
        image: "/skillLogos/frontend.png",
    },
    {
        title: "Backend Technologies",
        array: BACKEND_TECHNOLOGIES,
        image: "/skillLogos/backend.png",
    },
    {
        title: "Database",
        array: DATABASES,
        image: "/skillLogos/database.png",
    },
    {
        title: "AWS Services",
        array: AWS_SERVICES,
        image: "/skillLogos/aws.png",
    },
    {
        title: "DevOps Tools",
        array: DEVOPS_TOOLS,
        image: "/skillLogos/devops.png",
    },
    {
        title: "Integration",
        array: INTEGRATIONS,
        image: "/skillLogos/integration.png",
    },
    {
        title: "Deployments",
        array: DEPLOYMENTS,
        image: "/skillLogos/deployment.png",
    },
    {
        title: "IDEs",
        array: IDES,
        image: "/skillLogos/ides.png",
    },
    {
        title: "Other Softwares",
        array: OTHER_SOFTWARES,
        image: "/skillLogos/otherSoftware.png",
    },
    {
        title: "Operating Systems",
        array: OPERATING_SYSTEMS,
        image: "/skillLogos/operatingSystem.png",
    },
];
