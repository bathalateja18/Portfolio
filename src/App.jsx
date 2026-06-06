import React from 'react'
import NavBar from './nav_bar/NavBar'
import Hearder from './header/Hearder';
import { useMediaQuery } from 'react-responsive';
import About from './about/About';



const App = () => {


   let[darkMode,setDarkMode]=React.useState(false);
      let toggleDarkMode=()=>{
          setDarkMode(!darkMode);
      }
  return (
    <>
   
        
 <NavBar togel={{darkMode,toggleDarkMode}}/>
   <Hearder togel={{darkMode,toggleDarkMode}}/> 
   <About togel={{darkMode,toggleDarkMode}}/>
   <mark>issue</mark>
    </>
  )
}

export default App