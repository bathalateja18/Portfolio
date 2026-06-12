import React, { useState } from 'react'
import {MoonFilled,SunFilled } from '@ant-design/icons'
import styles from './navbar.module.css'
import { useTheme } from '../ContextApi'


const NavBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
    <div id={styles.nav} style={{backgroundColor: 'var(--bg)'}} >

    <div id={styles.logo}>
        <h1>[<small>BT</small>]</h1>
    </div>
   
    <div id={styles.links } >
        <ul type='none'>
        <a href="" ><li>About      </li></a>
        <a href=""  ><li>Skills     </li></a>
        <a href=""  ><li>Experience </li></a>
        <a href=""  ><li>Projects   </li></a>
        <a href=""  ><li>Resume     </li></a>
        <a href=""  ><li>Resume     </li></a>
        <a href=""  ><li>Contact    </li></a>
    </ul></div>
    <div id={styles.icons} onClick={toggleTheme}>
        {theme === 'light' ? <SunFilled style={{color:'gold'}} />:<MoonFilled style={{color:'gold'}}/> }
    </div>
    </div>
    </>
  )
}

export default NavBar

