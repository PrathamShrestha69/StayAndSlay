import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const LIGHT_LOGO = "/logo-light.png";
const DARK_LOGO = "/logo-dark.png";

const Navbar = () => {
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
      document.documentElement.setAttribute("data-theme", saved);
      setTheme(saved);
    }

    return () => obs.disconnect();
  }, []);

  const logoSrc = theme === "dark" ? DARK_LOGO : LIGHT_LOGO;

  const toggleTheme = (next) => {
    const newTheme = next || (theme === "dark" ? "retro" : "dark");
    document.documentElement.setAttribute("data-theme", newTheme);
    // also toggle `dark` class for setups relying on class
    if (newTheme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("site-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="flex flex-row items-center justify-between h-16  px-6 gap-3">
      <h1 className="font-extrabold text-xl">
        <Link to="/" className="inline-flex items-center gap-3">
          <img src={logoSrc} alt="Stay & Saly" className="h-16 w-auto" />
        </Link>
      </h1>

      <div className="flex flex-row items-center gap-5 ">
        <Link
          to="/register"
          className="btn btn-large btn-accent hidden sm:inline-flex  border-black border-2 hover:scale-105 transition-transform duration-200 border-b-4 border-r-4 "
        >
          Register Here
        </Link>

        <label className="toggle text-base-content">
          <input
            type="checkbox"
            value="coffee"
            className="theme-controller"
            onChange={(e) => toggleTheme()}
            checked={theme === "dark"}
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
