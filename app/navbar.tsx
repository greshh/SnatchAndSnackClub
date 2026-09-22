"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav 
      className="font-libre-baskerville tracking-widest font-semibold fixed top-0 text-md md:text-base z-50 w-screen"
      style={{ 
        backgroundColor: pathname === "/" ? "transparent" : "#F6F2DF",
        borderBottom: pathname === "/" ? "none" : "1px solid #5A3825",
      }}
    >
      <div 
        className="h-[10vh] md:h-[12vh] container mx-auto px-5 md:px-14 py-3 flex justify-between items-center"
        style={{ color: pathname === "/" ? "white" : "#5A3825" }}
      >
        <div className="flex space-x-20 w-[30vw] md:w-fit">
          <Link href="/about">{"About".toUpperCase()}</Link>
        </div>
        <Link href="/" className="h-[85%] opacity-0 transition-opacity duration-500 w-fit pl-8" style={{ opacity: pathname !== "/" ? 1 : 0 }}>
          <Image src="/logo/short-transparent.png" alt="logo" width={1000} height={1000} className="h-full w-auto"/>
        </Link>
        <div className="flex space-x-20 w-[30vw] md:w-fit">
          <Link href="/contact">{"Contact".toUpperCase()}</Link>
        </div>
      </div>
    </nav>
  )
}