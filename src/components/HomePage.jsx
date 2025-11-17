import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import OurSpeakers from "./OurSpeakers";
import SponserCarousel from "./SponserCarousel";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const LIGHT_LOGO = "/logo-light.png";
const DARK_LOGO = "/logo-dark.png";

const HomePage = () => {

  useGSAP(()=>{
    const paragraphSplit = new SplitText("#para",{type:"lines"});

    gsap.from(paragraphSplit.lines,{
      y:100,
      opacity:0,
      duration:1,
      ease:"power4.out",
      stagger:0.2,
  })

  gsap.from("#logo",{
    scale:0,
  })
  })


  const getTheme = () => {
    const dt = document.documentElement.getAttribute("data-theme");
    if (dt) return dt;
    return document.documentElement.classList.contains("dark")
      ? "dark"
      : "retro";
  };

  const [theme, setTheme] = useState(
    typeof document !== "undefined" ? getTheme() : "retro"
  );

  useEffect(() => {
    const obs = new MutationObserver(() => setTheme(getTheme()));
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });
    const saved = localStorage.getItem("site-theme");
    if (saved) {
      setTheme(saved);
    }
    return () => obs.disconnect();
  }, []);

  const logoSrc = theme === "dark" ? DARK_LOGO : LIGHT_LOGO;

  return (
    <div className="flex flex-col p-10 lg:p-6 text-center items-center gap-6 max-w-4xl mx-auto">
      <img id="logo" src={logoSrc} alt="logo" className="h-40 sm:h-96 w-auto" />
      <p id="para" className="text-xl">
        “Stay & Slay: Build Your Dreams in Nepal” is a student led event focused on SDG 8 "Decent Work and Economic Growth" which will help for youth career development in Nepal. Our event focuses on providing insights from our guests about decent work and economic growth with a little
twist of fun workshops filled with different business ideas qnas and a
        lot of different activities.
      </p>
       <Link to="/register"><button className="btn btn-small btn-accent rounded-2xl mx-auto">
       Registration Open Now!!
      </button></Link>
    <OurSpeakers />
    <SponserCarousel/>
    </div>
  );
};

export default HomePage;
