import Image from "next/image";

const page = () => {
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
                        I am actively seeking opportunities to apply my acquired
                        skills and knowledge to real-world projects. My
                        educational background has equipped me with a solid
                        foundation in AI and ML algorithms, data analysis, and
                        programming languages such as Python. Additionally, I
                        have gained practical experience through hands-on
                        projects, both independently and collaboratively.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default page;
