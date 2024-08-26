import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full max-w-[1400px] flex justify-center items-center flex-col gap-8 py-[60px] px-5 bg-secondary text-secondary">
            <div className="flex flex-wrap justify-center items-center gap-7">
                <div className="w-[200px] flex justify-center">
                    <Link
                        className="flex gap-2"
                        target="_blank"
                        href="https://www.linkedin.com/jobs/view/3550573002"
                        title="https://www.linkedin.com/jobs/view/3550573002"
                    >
                        <Image
                            src="/icons/linkedin.svg"
                            alt="LinkedIn"
                            width={20}
                            height={20}
                        />
                        <p className="text-[16px]">Linkedn Profile</p>
                    </Link>
                </div>
                <div className="w-[200px] flex justify-center">
                    <Link
                        className="flex gap-2"
                        target="_blank"
                        href="https://github.com/vzirshehryar"
                        title="https://github.com/vzirshehryar"
                    >
                        <Image
                            src="/icons/github.svg"
                            alt="GitHub"
                            width={20}
                            height={20}
                        />
                        <p className="text-[16px]">GitHub Profile</p>
                    </Link>
                </div>
                <div className="w-[200px] flex justify-center">
                    <Link
                        className="flex gap-2"
                        target="_blank"
                        href="mailto:vzirshehryar@gmail.com"
                        title="mailto:vzirshehryar@gmail.com"
                    >
                        <Image
                            src="/icons/envelope-regular.svg"
                            alt="Gmail"
                            width={20}
                            height={20}
                        />
                        <p className="text-[16px]">Email Address</p>
                    </Link>
                </div>
                <div className="w-[200px] flex justify-center">
                    <Link
                        className="flex gap-2"
                        target="_blank"
                        href="https://www.hackerrank.com/vzirshehryar?h_r=internal-search&hr_r=1"
                        title="https://www.hackerrank.com/vzirshehryar?h_r=internal-search&hr_r=1"
                    >
                        <Image
                            src="/icons/hackerrank.svg"
                            alt="Hacker Rank"
                            width={20}
                            height={20}
                        />
                        <p className="text-[16px]">Hacker Rank</p>
                    </Link>
                </div>
            </div>
            <p>Copyright &#169; 2023 </p>
        </footer>
    );
};

export default Footer;
