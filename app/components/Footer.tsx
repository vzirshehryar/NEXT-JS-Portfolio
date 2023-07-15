import Link from "next/link";
import Image from "next/image";

import Styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.links}>
        <div>
          <Link
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
            <p>Linkedn Profile</p>
          </Link>
        </div>
        <div>
          <Link
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
            <p>GitHub Profile</p>
          </Link>
        </div>
        <div>
          <Link
            target="_blank"
            href="vzirshehryar@gmail.com"
            title="vzirshehryar@gmail.com"
          >
            <Image
              src="/icons/envelope-regular.svg"
              alt="Gmail"
              width={20}
              height={20}
            />
            <p>Email Address</p>
          </Link>
        </div>
        <div>
          <Link
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
            <p>Hacker Rank</p>
          </Link>
        </div>
      </div>
      <p>Copyright &#169; 2023 </p>
    </footer>
  );
};

export default Footer;
