"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Parallax() {
  const bgRef = useRef<HTMLDivElement>(null);
  const scrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };

    const animate = () => {
      if (bgRef.current) {
        bgRef.current.style.transform =
          `translateY(${scrollY.current * 0.3}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll);
    requestAnimationFrame(animate);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative h-fit w-full z-0">
      <div ref={bgRef} className="absolute inset-0 z-0 w-full h-screen">
        <Image 
          src="/background.jpg"
          alt="background" 
          fill 
          className="object-cover w-full object-bottom"
        />
      </div>
    </div>
  );
}