import React from 'react'
import NavBar from './nav_bar/NavBar'
import Hearder from './header/Hearder';
import About from './about/About';
import { useTheme } from './ContextApi';
import { useEffect } from 'react';
import './App.css'




const App = () => {
   useEffect(()=>{
   document.title=`Bathala Teja - Portfolio `
   console.log("use effect is calling ");
   
  },[0]) 
 
  return (
    <>
        
 <NavBar />
   <Hearder /> 
   <About/>
   <mark>issue</mark>
    </>
  )
}

export default App