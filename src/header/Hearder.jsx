import React from 'react'
import Style from './header.module.css'
import { useTheme } from '../ContextApi.jsx'

const Hearder = () => {
const { theme, toggleTheme } = useTheme();
  let darkMode = theme === 'dark';
//   console.log('Header',darkMode);
  
  return (
    <>
    <section id={Style.header} >
      <h1 id={Style.name}>Hello,<span > i'm Bathala Teja</span></h1>
      <p id={Style.role}>Software Engineer | <span>Coding Enthusiast</span> </p>
      <div id={Style.buttons}>
        <button>View projects</button>
        <button>Contact me</button>
      </div>
    </section>
    </>
  )
}

export default Hearder