// import React from 'react'
// import ReactDom from 'react-dom/client'
// import App from './App.jsx'
// import './ContextApi.css'
// import { ThemeProvider } from './ContextApi.jsx'


// ReactDom.createRoot(document.getElementById('root')).render(
 
//     <React.StrictMode>
//         <ThemeProvider>
//             <App />
//         </ThemeProvider>
//     </React.StrictMode>
 
// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./ContextApi";
import "./ContextApi.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

