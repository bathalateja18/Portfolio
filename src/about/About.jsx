import React from 'react'
import  './About.css'
import myPic from '../../public/MY_PIC.jpg'

const About = (props) => {

    let{darkMode} =props.togel;
    console.log("about ",darkMode);
    
  return (
    <>
    <section id={darkMode? 'about': 'aboutDark'} >
        <div className={darkMode? 'aboutHead': 'aboutDarkHead'}>
            <h1>About Me</h1>
        </div>
        <aside className={darkMode? 'aboutBody': 'aboutDarkBody'}>
          <div className={darkMode? 'aboutpic': 'aboutpicDark'}>
           <img src={myPic} alt="" />
          </div>
        <div  className={darkMode? 'aboutData': 'aboutDataDark'}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, accusantium harum tempore odio vero voluptatibus doloribus accusamus, ea beatae officia laboriosam eaque aperiam magni rem, consequatur exercitationem excepturi nesciunt nam.</p>
        </div>
        </aside>
        
    </section>
    </>
  )
}

export default About