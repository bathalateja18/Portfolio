// import React, { useState } from 'react'
// import {MoonFilled,SunFilled } from '@ant-design/icons'
// import styles from './navbar.module.css'
// import { useTheme } from '../ContextApi'
// import About from '../about/About'
// import skilld from '../Tech/Technologies'
// import experience from '../prof_Experience/ProfessionalExperience'
// import projects from '../projects/Projects'
// import resume from '../Res/Resume'
// import contact from '../contact/Contact'


// const NavBar = () => {
//   const { theme, toggleTheme } = useTheme();
//   const handleScroll =(id)=>{
//     const element=document.getElementById(id);
//     if(element)
//     {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   return (
//     <>
//     <div id={styles.nav} style={{backgroundColor: 'var(--bg)'}} >

//     <div id={styles.logo}>
//         <h1>[<small>BT</small>]</h1>
//     </div>
   
//     <div id={styles.links } >
//         <ul type='none'>
//         <li><button >About     </button> </li>
//         <li><button >Skills    </button> </li>
//         <li><button >Experience</button> </li>
//         <li><button >Projects  </button> </li>
//         <li><button >Resume    </button> </li>
//         <li><button >Contact   </button> </li>
//     </ul></div>
//     <div id={styles.icons} onClick={toggleTheme}>
//         {theme === 'light' ? <SunFilled style={{color:'gold'}} />:<MoonFilled style={{color:'gold'}}/> }
//     </div>
//     </div>
//     </>
//   )
// }

// export default NavBar


import React from 'react'
import { MoonFilled, SunFilled } from '@ant-design/icons'
import styles from './navbar.module.css'
import { useTheme } from '../ContextApi'

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id={styles.nav} style={{ backgroundColor: 'var(--bg)' }}>
        <div id={styles.logo}>
          <h1>[<small>BT</small>]</h1>
        </div>

        <div id={styles.links}>
          <ul type='none'>
            <li><button onClick={() => handleScroll('About')}>About</button></li>
            <li><button onClick={() => handleScroll('Technologies')}>Skills</button></li>
            <li><button onClick={() => handleScroll('prefossionExperience')}>Experience</button></li>
            <li><button onClick={() => handleScroll('Projects')}>Projects</button></li>
            <li><button onClick={() => handleScroll('Resume')}>Resume</button></li>
            <li><button onClick={() => handleScroll('Contact')}>Contact</button></li>
          </ul>
        </div>

        <div id={styles.icons} onClick={toggleTheme}>
          {theme === 'light' ? (
            <SunFilled style={{ color: 'gold' }} />
          ) : (
            <MoonFilled style={{ color: 'gold' }} />
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;

