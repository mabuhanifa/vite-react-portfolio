import React, { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

export default function Nav() {
  const [theme, setTheme] = useState("light");

  // if local storage is empty save theme as light
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    // select html elem
    const html = document.querySelector("html");
    if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  // handle switch theme
  const handleTheme = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="flex justify-between mb-20">
      <div className="flex gap-x-10 justify-center items-center">Logo</div>
      <div className="flex gap-x-10 justify-center items-center">
        <a href="/">Home</a>
        <a href="/">Course</a>
        <a href="/">Price</a>
        <a href="/">About</a>
        <div
          className="flex justify-center items-center cursor-pointer cursor:pointer"
          onClick={handleTheme}
        >
          {theme === "dark" ? (
            <BsSun className="inline text-xl" />
          ) : (
            <FaMoon className="inline text-xl" />
          )}
        </div>
      </div>
      <div className="flex gap-x-5">
        <button className="px-5 py-2 bg-blue-700 text-white font-bold rounded-full">
          SIGN UP
        </button>
      </div>
    </nav>
  );
}
