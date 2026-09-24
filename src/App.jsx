import React from 'react'
import { useTheme } from './ContextApi';
import { useEffect } from 'react';
import './App.css'
import { Fragment } from 'react';

import NavBar from './nav_bar/NavBar'
import Hearder from './header/Hearder';
import About from './about/About';
import Technologies from './Tech/Technologies';
import PrefessionalExperience from './prof_Experience/ProfessionalExperience'
import Projects from './projects/Projects';
import Resume from './Res/Resume';
import Contact from './contact/Contact';
import Footer from './footer/Footer';



const App = () => {
   useEffect(()=>{
   document.title=`Bathala Teja - Portfolio `
   console.log("use effect is calling ");  

      

  },[0]) 
 
  return (
  //   <Fragment >
  //       <div id='main'>
  //             <NavBar id='NavBar' />
  //             <Hearder id='Hearder' /> 
  //             <About id='About'/>
  //             <Technologies id='Technologies' />
  //             <PrefessionalExperience id='prefossionExperience'/>
  //             <Projects id='Projects'/>
  //             <Resume  id='Resume'/>
  //             <Contact id='Contact' />
  //             <Footer  id='Footer' />
  //        </div>
  // </Fragment>
  <Fragment>
    <div id='main'>
      <div id='NavBar'><NavBar /></div>
      <div id='Hearder'><Hearder /></div>
      <div id='About'><About /></div>
      <div id='Technologies'><Technologies /></div>
      <div id='prefossionExperience'><PrefessionalExperience /></div>
      <div id='Projects'><Projects /></div>
      <div id='Resume'><Resume /></div>
      <div id='Contact'><Contact /></div>
      <div id='Footer'><Footer /></div>
    </div>
  </Fragment>
  )
}

export default App