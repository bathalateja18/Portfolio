// import React from 'react'
// import { createContext, useState, useContext } from "react";
// import './ContextApi.css'

// const ThemeContext = React.createContext();

// export const ThemeProvider = ({ children }) => 
//     {
//         const [theme,setTheme] = React.useState('light');

//        const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme);
//   };

//         return (<ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>);

//     }

//   export const useTheme = () => useContext(ThemeContext);

// ThemeContext.js
import { createContext, useState, useContext } from "react";
import './ContextApi.css'

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 👇 This must be exported
export const useTheme = () => useContext(ThemeContext);
