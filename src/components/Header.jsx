import { useEffect, useState } from "react";
import logo from "../assets/react.svg";
export default function Header() {
  // Get theme from localStorage OR default
  const [theme, setTheme] = useState(() =>{
    return localStorage.getItem("theme") || "gTwo";
  });
  // Apply theme + save to localStorage
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo"/>
        <span>TaskApp</span>
      </div>
      <div className="themeSelector">
        <span
          title="Light Theme"
          className={theme === "light" ? "light activeTheme" : "light"}
          onClick={() => setTheme("light")}></span>
        <span
          title="Medium Theme"
          className={theme === "medium" ? "medium activeTheme" : "medium"}
          onClick={() => setTheme("medium")}></span>
        <span
          title="Dark Theme"
          className={theme === "dark" ? "dark activeTheme" : "dark"}
          onClick={() => setTheme("dark")}></span>
        <span
          title="Gradient One"
          className={theme === "gOne" ? "gOne activeTheme" : "gOne"}
          onClick={() => setTheme("gOne")}></span>
        <span
          title="Gradient Two"
          className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}
          onClick={() => setTheme("gTwo")}></span>
        <span
          title="Gradient Three"
          className={theme === "gThree" ? "gThree activeTheme" : "gThree"}
          onClick={() => setTheme("gThree")}></span>
      </div>
    </header>
  );
}