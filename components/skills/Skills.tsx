import { SKILLS } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const Skills = () => {
    return (
        <section className="my_section bg-primary2" id="SKILLS">
            <h1>Skills</h1>
            <div className="p-4 columns-1 md:columns-2 lg:columns-3 space-y-4 mx-auto">
                {SKILLS.map((skill) => (
                    <Box
                        key={skill.title}
                        image={skill.image}
                        title={skill.title}
                        array={skill.array}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;

function Box({
    image,
    title,
    array,
}: {
    image: string;
    title: string;
    array: string[];
}) {
    return (
        <div className="flex flex-col gap-4 bg-[#131724] h-fit p-6 rounded-lg shadow-lg min-w-[320px] max-w-[400px] break-inside-avoid">
            <div className="flex items-center gap-3">
                <Image src={image} alt={title} width={40} height={40} />
                <p className="text-2xl font-semibold">{title}</p>
            </div>
            <div className="flex flex-wrap justify-start gap-2">
                {array.map((item) => (
                    <p
                        className="py-2 px-3 rounded-xl bg-[#182D2F] text-[#2CD2BD]"
                        key={title}
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
}
