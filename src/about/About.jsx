import React,{useState} from 'react'
import style from'./about.module.css'
import myPic from '/Users/batha/Desktop/Portfolio/public/LinkidenPic.jpeg'
import {useTheme} from '../ContextApi'
import { Row, Col } from 'antd';
// import Portal from './Portal';

const About = () => {

  const { theme,toggleTheme } = useTheme();
   let darkMode = theme === 'dark';
  //  console.log('About',darkMode);

  // portals

  let[loginVisible,setLogin] =useState(false)
    
    let updateLoginVisibility=()=>setLogin(!loginVisible)
   
  return (
    <>
    <section id= {darkMode ? style.aboutDark : style.about} >
        <div className={ darkMode ? style.aboutHeadDark : style.aboutHead}>
            <h1>About Me</h1>
        </div>
        <aside className={darkMode ? style.aboutBodyDark : style.aboutBody}>
          <div className={darkMode ? style.aboutpicDark : style.aboutpic}>
           <img src={myPic} alt="" />
          </div>
        <div  className= {darkMode ? style.aboutDataDark : style.aboutData}>
          <p>I am a full-stack engineer who thrives on solving complex problems and optimizing code performance. 
            My core expertise is built around <b>Java, Spring Boot, Hibernate, SQL, and React.js</b>.
             To ensure my technical foundation is rock-solid, I have been undergoing intensive upskilling in <b>Data Structures, Algorithms (DSA)</b> , and <b>System Design</b>  through <b>Scaler</b>, where I even achieved a milestone of 100% problem-solving progress.
            My practical engineering approach comes from my experience as a <b>Software Engineer Intern</b> at <b>MyLapay</b>. During this internship, I focused heavily on backend efficiency and data protection—successfully optimizing database queries to accelerate application performance and implementing critical server-side data masking to secure sensitive information like user credentials. I love bridging the gap between deep algorithmic thinking and real-world application impact.</p>
        </div>
        <div className={darkMode ? style.dummyDark : style.dummy}>
        </div>
        </aside>
      <footer className={darkMode ? style.aboutFooterDark : style.aboutFooter}>
        
         {/* <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8}>
        
    <button onClick={updateLoginVisibility}>My self introduction</button>
    {loginVisible?<Portal click={{loginVisible,updateLoginVisibility}}/>:<></>}
    
      </Col>
      
    </Row> */}
      </footer>
    </section>
    </> 
  )
}

export default About