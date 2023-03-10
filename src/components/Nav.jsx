import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

export default function Nav({ handleSwitch }) {
  const [night, setNight] = useState(false);
  const [menu, setMenu] = useState(true);
  const switchTheme = () => {
    setNight(!night);
    handleSwitch();
  };
  return (
    <div className="m-10 sm:m-0 dark:text-gray-300">
      <nav className="flex flex-col sm:flex-row justify-between font-semibold">
        <div className="mb-10">
          <div className="flex justify-between items-center">
            <a href="/">Abu Hanifa</a>
            <div className="sm:hidden" onClick={() => setMenu(!menu)}>
              {menu ? (
                <AiOutlineClose className="text-xl" />
              ) : (
                <AiOutlineMenu className="text-xl" />
              )}
            </div>
          </div>
        </div>
        <div
          className={
            "hidden sm:flex flex-col sm:flex-row justify-between items-center gap-10"
          }
        >
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Skills</a>
          <a href="/">Service</a>
          <a href="/">Portfolio</a>
          <a href="/">Contact</a>
          <div
            className="flex justify-center items-center cursor-pointer "
            onClick={switchTheme}
          >
            {night ? (
              <BsSun className="inline text-2xl" />
            ) : (
              <FaMoon className="inline text-2xl" />
            )}
          </div>
        </div>
        <div
          className={
            menu
              ? "sm:hidden flex flex-col sm:flex-row justify-between items-center gap-10"
              : "hidden"
          }
        >
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Skills</a>
          <a href="/">Service</a>
          <a href="/">Portfolio</a>
          <a href="/">Contact</a>
          <div
            className="flex justify-center items-center cursor-pointer "
            onClick={() => setNight(!night)}
          >
            {night ? (
              <FaMoon className="inline text-2xl" />
            ) : (
              <BsSun className="inline text-2xl" />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
