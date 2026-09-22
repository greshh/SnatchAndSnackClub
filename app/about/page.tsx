import Footer from "../footer";
import Navbar from "../navbar";

export default function About() {
  return (
    <div className="w-full h-full bg-[#F6F2DF] text-[#5A3825]">
      <Navbar/>
      <main className="flex flex-col items-center gap-10 mt-[10vh] pt-5 md:pt-10 pb-10 md:pb-20 px-10 md:px-60">
        <div className="flex flex-col gap-5">
          <h1 className="font-luxurious-script text-5xl md:text-6xl text-center">About</h1>
          <div className="flex flex-col gap-4 font-libre-baskerville text-xs md:text-sm tracking-wide leading-relaxed md:leading-normal">
            <p><span className="font-bold">Snatch & Snack Club</span> is a community built around movement, nourishment and connection.</p>
            <p>We create Pilates experiences that feel less like a workout you have to tick off your list and more like something you genuinely look forward to.</p>
            <p>Our events bring together movement, beautiful spaces, good food and good people - with a little something different at every gathering.</p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-5 md:gap-0 px-10 justify-between h-fit w-full font-libre-baskerville">
          <div className="w-full md:w-1/4 h-full flex flex-col gap-1 text-center items-center">
            <div className="w-40 h-40 bg-white rounded-[100%]"/>
            <h3 className="font-luxurious-script text-4xl md:text-5xl">Move</h3>
            <p className="text-xs leading-relaxed tracking-wide">Pop-up group classes designed to make you feel strong, energised and confident.</p>
          </div>
          <div className="w-full md:w-1/4 h-full flex flex-col gap-1 text-center items-center">
            <div className="w-40 h-40 bg-white rounded-[100%]"/>
            <h3 className="font-luxurious-script text-4xl md:text-5xl">Treat</h3>
            <p className="text-xs leading-relaxed tracking-wide">Curated desserts and little indulgences that make every event feel special.</p>
          </div>
          <div className="w-full md:w-1/4 h-full flex flex-col gap-1 text-center items-center">
            <div className="w-40 h-40 bg-white rounded-[100%]"/>
            <h3 className="font-luxurious-script text-4xl md:text-5xl">Give</h3>
            <p className="text-xs leading-relaxed tracking-wide">Events that create opportunities to support charities and causes that matter.</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-luxurious-script text-5xl md:text-6xl text-center">Our Philosophy</h2>
          <div className="flex flex-col gap-2 font-libre-baskerville text-center text-xs md:text-sm tracking-wide">
            <p className="font-bold italic text-base md:text-lg tracking-wider">Movement should feel good</p>
            <p className="leading-relaxed md:leading-normal">You can get strong while treating yourself. We believe health is about finding a balance that works for you, not fitting into one definition of what healthy looks like.</p>
          </div>
          <div className="flex flex-col gap-2 font-libre-baskerville text-center text-xs md:text-sm tracking-wide">
            <p className="font-bold italic text-base md:text-lg tracking-wider">Food should be enjoyed</p>
            <p className="leading-relaxed md:leading-normal">We're not interested in guilt, restriction or earning your dessert. There's room for both wellness and indulgence.</p>
          </div>
          <div className="flex flex-col gap-2 font-libre-baskerville text-center text-xs md:text-sm tracking-wide">
            <p className="font-bold italic text-base md:text-lg tracking-wider">Community makes it better</p>
            <p className="leading-relaxed md:leading-normal">Our events are an opportunity to meet people, try something new and create moments worth remembering.</p>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}