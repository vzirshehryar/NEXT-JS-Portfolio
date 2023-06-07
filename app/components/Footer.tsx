import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center bg-blue-900 text-slate-100 px-5 py-3">
        <div className="row flex justify-center items-center">
            <Link href="" className="row flex justify-center items-center gap-3 text-sm m-3 hover:text-slate-400 w-fit">
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20}/>
                <p>Linkedn Profile</p>
            </Link>
        </div>
        <div className="row flex justify-center items-center">
            <Link href="" className="row flex justify-center items-center gap-3 text-sm m-3 hover:text-slate-400 w-fit">
                <Image src="/icons/github.svg" alt="GitHub" width={20} height={20}/>
                <p>GitHub Profile</p>
            </Link>
        </div>
        <div className="row flex justify-center items-center">
            <Link href="" className="row flex justify-center items-center gap-3 text-sm m-3 hover:text-slate-400 w-fit">
                <Image src="/icons/envelope-regular.svg" alt="Gmail" width={20} height={20}/>
                <p>Email Address</p>
            </Link>    
        </div>
        <div className="row flex justify-center items-center">
            <Link href="" className="row flex justify-center items-center gap-3 text-sm m-3 hover:text-slate-400 w-fit">
                <Image src="/icons/hackerrank.svg" alt="Hacker Rank" width={20} height={20}/>
                <p>Hacker Rank</p>
            </Link>
        </div>
        <div className="row flex justify-center items-center gap-3 text-sm m-3 md:col-span-2 lg:col-span-4">
            <p className="text-sm text-center">Copyright &#169; 2023 </p>
        </div>
    </footer>
  )
}

export default Footer
