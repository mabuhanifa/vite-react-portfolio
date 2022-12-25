import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Services from "./components/Services";
function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="text-gray-700 bg-[#f9f9f8] dark:bg-[#101621] dark:text-gray-100 2xl:px-40 xl:px-20 py-10 ">
      <Nav handleSwitch={handleSwitch} />
      <Main />
      <About />
      <Services />
    </div>
  );
}

export default App;
