import Image from "next/image";
import Contact from "./(pages)/contact/page";
import Link from "next/link";
export default function Home() {
  return (
    <main className="" style={{ height: "120vh" }}>
      {/* <Image src="/favicon.ico" alt="Fav-Icon" width={100} height={100} /> */}
      <Link href="/">Contact</Link>
      <Link href="/about">Contact</Link>
      <Link href="/projects">Contact</Link>
      <Link href="/skills">Contact</Link>
      <Link href="/contact">Contact</Link>
    </main>
  );
}
