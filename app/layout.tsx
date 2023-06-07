import "./globals.css"
import Navbar from './components/Navbar'
import { Inter } from 'next/font/google'
import Footer from "./components/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Wazir Shehryar Ali",
  description: 'Web App Developer, Android App Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
