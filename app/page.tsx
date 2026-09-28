import Image from "next/image";
import Navbar from "./navbar";
import Footer from "./footer";
import Parallax from "./parallax";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar/>
      <main>
        <div className="w-full h-[50vh] md:h-screen relative z-0">
          <Parallax/> 
          <Image 
            src="/background.jpg"
            alt="background" 
            width={2000}
            height={2000}
            priority
            quality={100}
            className="object-cover w-full object-bottom h-full block md:hidden absolute inset-0 z-0"
          />
          <div className="absolute inset-0 bg-[#d1cdbd4b]"/>
          <div className="absolute inset-0 py-20 md:py-0 px-6 md:px-0 flex flex-col items-center justify-center gap-6 md:gap-12">
            <Image id="logo" src="/logo/transparent.png" alt="Snatch & Snack Club Logo" width={400} height={400} className="h-32 md:h-68 w-auto drop-shadow-2xl drop-shadow-[#F6F2DF8C]" />
            <a href="/" className="group">
              <div className="w-fit h-fit md:px-16 md:py-6 px-10 py-3 bg-white rounded-full group-hover:drop-shadow-[0_10px_15px_#F6F2DF8C] transition-[filter] duration-500">
                <p className="md:text-2xl sm:text-md text-sm text-[#5A3825] tracking-widest">{"Book your next event".toUpperCase()}</p>
              </div>
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center px-10 py-10 md:px-60 md:py-20 gap-2 md:gap-2 tracking-wide z-40 bg-[#F6F2DF] relative top-0">
          <p className="text-base md:text-lg text-center text-[#5A3825] font-libre-baskerville italic tracking-wide">Pilates with a little something extra</p>
          <p className="text-xs/6 md:text-sm/8 text-[#5A3825] font-libre-baskerville text-center leading-relaxed md:leading-loose">
            Whether you're here for the workout, the dessert, or simply an excuse to do something for yourself, there's a place for you here.
          </p>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
