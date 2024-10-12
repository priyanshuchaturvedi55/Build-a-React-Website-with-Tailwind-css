import { createContext, useState, useContext } from "react";

// Create the ThemeContext
export const ThemeContext = createContext();

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [Theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ Theme, handleToggleTheme }}>
      {children} {/* Corrected the prop from Children to children */}
    </ThemeContext.Provider>
  );
};

// DarkLight component
export const DarkLight = () => {
  const { Theme, handleToggleTheme } = useContext(ThemeContext); // Fixed the useContext issue

  return (
    <div
      className={`p-4 h-lvh flex flex-col justify-center items-center ${
        Theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h2 className={`my-4 text-xl  ${
        Theme === "light" ? "text-gray-800" : "text-white"
      }`} >{Theme === "dark" ? "Dark Mode" : "Light Mode"} Website</h2>


      <p  className={`my-4 text-xl  ${
        Theme === "light" ? "text-gray-800" : "text-white"
      }`} >Hello!! My React v19 Fans</p>


      <button onClick={handleToggleTheme}>
        {Theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      </button>
    </div>
  );
};
