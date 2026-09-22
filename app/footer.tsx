import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col gap-3 border-t border-[#5A3825] w-full py-8 bg-[#F6F2DF] font-libre-baskerville">
      <div className="flex flex-row justify-center items-center gap-6">
        <a href="https://www.instagram.com/snatchandsnack.club/" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/instagram.png" alt="Instagram" width={30} height={30} className="w-4 md:w-6 h-auto"/>
        </a>
        {/* <a href="mailto:" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/email.png" alt="Email" width={30} height={30} className="w-7 md:w-8 h-auto"/>
        </a> */}
      </div>
      <p className="text-[#5A3825] tracking-wide text-xs md:text-xs text-center">© 2026 Snatch & Snack</p>
    </div>
  )
}