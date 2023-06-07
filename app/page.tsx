import Image from "next/image"
export default function Home() {
  return (
    <main className="main bg-slate-100 text-blue-900">
      <Image src="/favicon.ico" alt="Fav-Icon" width={100} height={100}/>
    </main>
  )
}
