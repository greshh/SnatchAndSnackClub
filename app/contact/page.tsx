"use client"
import { useState } from "react";
import Footer from "../footer";
import Navbar from "../navbar";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [emailStatus, setEmailStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const emailParams = {
      name: formData.get("name"),
      message: formData.get("message"),
      email: formData.get("email"),
    };

    setEmailStatus("idle");

    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    });

    emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, emailParams).then(
      (response) => {
        console.log('Success:', response.status, response.text);
        setEmailStatus("success");
        form.reset();
      },
      (error) => {
        console.log('Error:', error);
        setEmailStatus("error");
      },
    );
  };

  return (
    <div className="w-full h-full bg-[#F6F2DF] text-[#5A3825]">
      <Navbar/>
      <main className="flex flex-col items-center gap-10 mt-[10vh] pt-5 md:pt-10 pb-10 md:pb-20 px-10 md:px-60 lg:px-96">
        <div className="flex flex-col gap-5 text-center font-libre-baskerville tracking-wide">
          <h1 className="font-luxurious-script text-5xl md:text-6xl">Contact</h1>
          <div className="flex flex-col gap-2 text-xs md:text-sm">
            <p>Have a question?</p>
            <p>Interested in collaborating?</p>
            <p>Want to bring Snatch & Snack to your event?</p>
          </div>
          <p className="italic text-md md:text-lg">We'd love to hear from you!</p>
        </div>
        <div className="flex flex-col gap-5 w-full px-0 lg:px-24">
          <h2 className="font-luxurious-script text-4xl md:text-5xl text-center">Get in Touch</h2>
          <form className="flex flex-col items-center w-full gap-3 text-xs md:text-sm tracking-wide font-libre-baskerville md:mb-1" onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Name" required className="w-full px-2 py-2 border border-[#5A3825] rounded-2xl outline-[#5A3825] bg-white text-center"/>
            <input type="email" name="email" placeholder="Email" required className="w-full px-2 py-2 border border-[#5A3825] rounded-2xl outline-[#5A3825] bg-white text-center"/>
            <textarea name="message" placeholder="Message" required className="w-full mb-2 px-2 py-2 border border-[#5A3825] rounded-2xl outline-[#5A3825] h-24 bg-white text-center"/>
            <button type="submit" className="bg-[#FC97AE] text-white italic tracking-wider text-base md:text-lg px-5 py-2 rounded-2xl font-bold hover:bg-[#E37E95] hover:cursor-pointer transition-all duration-500 w-fit">Send Message</button>
          </form>
          <div>
            <p 
              className="text-xs tracking-wide font-libre-baskerville text-center italic"
              style={{ display: emailStatus === "idle" ? "hidden" : "block" }}
            >
              {emailStatus === "success" && "Email sent successfully! We will get back to you shortly."}
            </p>
            <p 
              className="text-xs tracking-wide font-libre-baskerville text-center italic"
              style={{ display: emailStatus === "idle" ? "hidden" : "block" }}
            >
              {emailStatus === "error" && "Something went wrong. Please try again."}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:px-24">
          <h2 className="font-luxurious-script text-4xl md:text-5xl text-center">Collaborations</h2>
          <p className="font-libre-baskerville text-center text-xs md:text-sm tracking-wide leading-relaxed">We're open to connecting with brands, venues, studios, creatives, food businesses and other like-minded people.</p>
        </div>
      </main>
      <Footer/>
    </div>
  );
}