import React, { useState } from 'react'
import {MoonFilled,SunFilled } from '@ant-design/icons'
import styles from './navbar.module.css'


const NavBar = (props) => {
let {darkMode,toggleDarkMode}=props.togel;
    if(darkMode){
        document.body.style.backgroundColor='white';
        document.body.style.color='white !important'; ;
    }
    else{
        document.body.style.backgroundColor=' #121212';
        document.body.style.color='black';
    }
  return (
    <>
    <div id={styles.nav} style={darkMode?{backgroundColor:"white"}:{backgroundColor:"rgb(22,33,62)"}}>

    <div id={styles.logo}>
        <h1>[<small>BT</small>]</h1>
    </div>
   
    <div id={darkMode?styles.links:styles.linksDark } >
        <ul type='none'>
        <a href="" ><li>About      </li></a>
        <a href=""  ><li>Skills     </li></a>
        <a href=""  ><li>Experience </li></a>
        <a href=""  ><li>Projects   </li></a>
        <a href=""  ><li>Resume     </li></a>
        <a href=""  ><li>Resume     </li></a>
        <a href=""  ><li>Contact    </li></a>
    </ul></div>
    <div id={styles.icons} onClick={toggleDarkMode}>
        {darkMode ? <SunFilled style={{color:'gold'}} />:<MoonFilled style={{color:'gold'}}/> }
    </div>
    </div>
    </>
  )
}

export default NavBar

