import React from 'react'
import Style from './header.module.css'
const Hearder = (props) => {
  let {togel:{darkMode}}=props;
//   console.log('Header',darkMode);
  
  return (
    <>
    <section id={darkMode?Style.header:Style.headerDark} >
      <h1 id={darkMode?Style.name:Style.nameDark}>Hello,<span > i'm Bathala Teja</span></h1>
      <p id={darkMode?Style.role:Style.roleDark}>Full Stack Developer | <span>Cooding Enthusiast</span> </p>
      <div id={darkMode?Style.buttons:Style.buttonsDark}>
        <button>View projects</button>
        <button>Contact me</button>
      </div>
    </section>
    </>
  )
}

export default Hearder