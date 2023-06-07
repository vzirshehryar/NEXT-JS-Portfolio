import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center bg-blue-900 text-slate-100 px-5 py-3 h-14 sticky top-0">
        <div className="logo">
            <Link className="text-2xl py-1 px-2 cursor-pointer hover:bg-blue-950 rounded" href="/">Shery</Link>
        </div>
        <div className="right flex flex-row justify-between gap-3">
            <div className="flex items-center justify-center">
                <Link className="py-1 px-2 cursor-pointer hover:bg-blue-950 rounded" href="/about">About</Link>
            </div>
            <div className="flex items-center justify-center">
                <Link className="py-1 px-2 cursor-pointer hover:bg-blue-950 rounded" href="/projects">Projects</Link>
            </div>
            <div className="flex items-center justify-center">
                <Link className="py-1 px-2 cursor-pointer hover:bg-blue-950 rounded" href="/expertise">Expertise</Link>
            </div>
            <div className="flex items-center justify-center">
                <Link className="py-1 px-2 cursor-pointer hover:bg-blue-950 rounded" href="/contact">Contact</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
