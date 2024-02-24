import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    mysql,
    git,
    github,
    html,
    javascript,
    freelance,
    truck,
    cgi,
    laravel,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: laravel,
        name: "Laravel",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Laravel Developer",
        company_name: "SIA Īpašumi EG",
        icon: truck,
        iconBg: "#fbc3bc",
        date: "January 2022 - November 2022",
        points: [
            "Developing and maintaining web applications using Laravel and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Main developer for an automated industrial weighin system that automatically tracked incoming and outgoing vehicles to caluclate their cargo mass for logistic purposes.",
        ],
    },
    {
        title: "Consultant of IT service managamenet process",
        company_name: "CGI IT Latvia SIA",
        icon: cgi,
        iconBg: "#ff9a9a",
        date: "Jun 2023 - September 2023",
        points: [
            "Learned java and worked on my SQL skills.",
            "Collaborated with a team full of trainees and worked on finding solutions for consulting services.",
            "Worked with a team using Agile methodology and larned many new skills along the way by trying out new positions.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Freelance developer",
        company_name: "",
        icon: freelance,
        iconBg: "#a2d2ff",
        date: "September 2023 - Present",
        points: [
            "Using hands on learning and developing many personal projects.",
            "Learning new technologies and skills, trying out THREE.JS and React.",
            "Working on a personal business project and implementing previously learned practices and maintaining the website.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/1tei',
    },
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/1tei/instaclone',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-red',
        name: 'Modern Blog',
        description: 'Created a full-stack blog that allows users to register, view posts, favourite and follow other people. Also there is an administrator dashboard with full controls over the site.',
        link: 'https://github.com/1tei/blog',
    },
];