import { useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs"; // Import icons
import App from "../App";



const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#1a202c"; // Dark background
      document.body.style.color = "#ffffff"; // Light text
      localStorage.setItem("theme", "dark");
    } else {
      document.body.style.backgroundColor = "#f3f4f6"; // Light background
      document.body.style.color = "#000000"; // Dark text
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition"
    >
      {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
    </button>
  );
};

export default DarkModeToggle;
