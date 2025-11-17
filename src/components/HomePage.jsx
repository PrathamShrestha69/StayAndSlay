import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import OurSpeakers from "./OurSpeakers";
import SponserCarousel from "./SponserCarousel";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import EventHiglights from "./EventHiglights";

const LIGHT_LOGO = "/logo-light.png";
const DARK_LOGO = "/logo-dark.png";

const HomePage = () => {
  useGSAP(() => {
    const paragraphSplit = new SplitText("#para", { type: "lines" });

    gsap.from(paragraphSplit.lines, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2,
    });

    gsap.from("#logo", {
      scale: 0,
    });
  });

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
      <img id="logo" src={logoSrc} alt="logo" className="h-40 lg:h-72 w-auto" />
      <p id="para" className="text-md lg:text-xl">
        Stay & Slay is a workshop where young minds create, pitch, and build
        their dreams. An inspiring youth-led event designed to change the
        narrative that success requires leaving the country. This program brings
        together students, entrepreneurs, and industry professionals to explore
        real opportunities within the country. Through motivational talks, a
        hands-on business idea workshop, and interactive pitch sessions,
        participants learn how creativity, skills, and determination can shape a
        meaningful future here at home. Stay & Slay empowers young Nepalis to
        dream boldly, build locally, and contribute to a stronger, self-reliant
        Nepal.
      </p>
      <div className="flex flex-row relative -left-6">
        <img src="./image.png" alt="img" className="h-15 w-15" />
        <Link to="/register" className="py-9">
          <button className="btn btn-small btn-accent mx-auto border-black border-2 hover:scale-105 transition-transform duration-200 border-b-4 border-r-4">
            Registration Open Now!!
          </button>
        </Link>
      </div>
      <EventHiglights />
      <OurSpeakers />
      <SponserCarousel />
    </div>
  );
};

export default HomePage;
