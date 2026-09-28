import React,{useState} from 'react'
import style from'./about.module.css'
import myPic from '/Users/batha/Desktop/Portfolio/public/LinkidenPic.jpeg'
import {useTheme} from '../ContextApi'
import { Row, Col } from 'antd';
// import Portal from './Portal';

const About = () => {

  
  // portals

  let[loginVisible,setLogin] =useState(false)
    
    let updateLoginVisibility=()=>setLogin(!loginVisible)
   
  return (
    <>
    <section id='About' class= {style.about} >
        <div className={  style.aboutHead}>
            <h1>About Me</h1>
        </div>
        <aside className={ style.aboutBody}>
          <div className={ style.aboutpic}>
           <img src={myPic} alt="" />
          </div>
        <div  className= {style.aboutData}>
          <p>I am a software engineer who thrives on solving complex problems and optimizing code performance. 
            My core expertise is built around <b>Java, Spring Boot, Hibernate, SQL, and React.js</b>.
             To ensure my technical foundation is rock-solid, I have been undergoing intensive upskilling in <b>Data Structures, Algorithms (DSA)</b> , and <b>System Design</b>  through <b>Scaler</b>, where I even achieved a milestone of 100% problem-solving progress.
            My practical engineering approach comes from my experience as a <b>Software Engineer Intern</b> at <b>MyLapay</b>. During this internship, I focused heavily on backend efficiency and data protection—successfully optimizing database queries to accelerate application performance and implementing critical server-side data masking to secure sensitive information like user credentials. I love bridging the gap between deep algorithmic thinking and real-world application impact.</p>
        </div>
        <div className={ style.dummy}>
        </div>
        </aside>
      <footer className={ style.aboutFooter}>
        
        
      </footer>
    </section>
    </> 
  )
}

export default About