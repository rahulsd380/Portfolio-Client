import Container from '@/Components/Reusable/Container/Container';
import React from 'react';
import { ICONS } from './../../../assets/index';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const TechToolBox = () => {
    const techToolboxLeft = [
        {
            icon: ICONS.js,
            name: "JavaScript",
            borderColor: "#F7DF1E", // JavaScript yellow
        },
        {
            icon: ICONS.nextjs,
            name: "Next.JS",
            borderColor: "#A8B9C0", // Next.js gray
        },
        {
            icon: ICONS.reactjs,
            name: "React.JS",
            borderColor: "#61DAFB", // React blue
        },
        {
            icon: ICONS.nodeJS,
            name: "Node.JS",
            borderColor: "#8AC54A", // Node.js green
        },
        {
            icon: ICONS.postgresql,
            name: "Postgres SQL",
            borderColor: "#336791", // PostgreSQL blue
        },
        {
            icon: ICONS.html,
            name: "HTML",
            borderColor: "#E44D26", // HTML orange-red
        },
        {
            icon: ICONS.css,
            name: "CSS",
            borderColor: "#1572B6", // CSS blue
        },
    ];
    
    const techToolboxRight = [
        {
            icon: ICONS.firebase,
            name: "Firebase",
            borderColor: "#FFCA28", // Firebase yellow
        },
        {
            icon: ICONS.github,
            name: "Github",
            borderColor: "#181717", // GitHub black
        },
        {
            icon: ICONS.mongodb,
            name: "Mongo DB",
            borderColor: "#47A248", // MongoDB green
        },
        {
            icon: ICONS.redux,
            name: "Redux & RTK Query",
            borderColor: "#764ABC", // Redux purple
        },
        {
            icon: ICONS.restApi,
            name: "Rest API",
            borderColor: "#00758F", // REST API teal
        },
        {
            icon: ICONS.tailwind,
            name: "Tailwind CSS",
            borderColor: "#38B2AC", // Tailwind teal
        },
        {
            icon: ICONS.typescript,
            name: "TypeScript",
            borderColor: "#3178C6", // TypeScript blue
        },
    ];
    

    return (
        <div className="mt-28 bg-[#0C0D21] px-5 py-20 rounded-xl">
                <Container>
                <h1 className="text-white font-semibold text-[40px] font-Poppins">Our Tech Toolbox</h1>
                <p className="font-Inter text-[#ffffff99] max-w-[900px] mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nobis, reprehenderit voluptas minima accusamus vel, qui pariatur quis dolores error nisi omnis vero iure! Est in sapiente esse dicta odio.
                </p>

                <Marquee className="mt-10" speed={70}>
                    {techToolboxLeft.map((tech, index) => (
                        <div
                            key={index}
                            className={`px-5 py-3 flex items-center gap-2 text-lg font-Inter rounded-md border w-fit mr-16`}
                            style={{ borderColor: tech.borderColor, color: tech.borderColor }}
                        >
                            <Image src={tech.icon} alt={tech.name} className="size-6" />
                            {tech.name}
                        </div>
                    ))}
                </Marquee>

                <Marquee className="mt-10" direction='right'>
                    {techToolboxRight.map((tech, index) => (
                        <div
                            key={index}
                            className={`px-5 py-3 flex items-center gap-2 text-lg font-Inter rounded-md border w-fit mr-16`}
                            style={{ borderColor: tech.borderColor, color: tech.borderColor }}
                        >
                            <Image src={tech.icon} alt={tech.name} className="size-6" />
                            {tech.name}
                        </div>
                    ))}
                </Marquee>
        </Container>
            </div>
    );
};

export default TechToolBox;
