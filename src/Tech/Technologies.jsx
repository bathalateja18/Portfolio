import React,{useState} from 'react'
import style from '../Tech/technologies.module.css'
import {useTheme} from '../ContextApi'


let Technologies = () => {
   const { theme,toggleTheme } = useTheme();
   let darkmode=theme==='dark';
    return(
        <>  
       <div id='Technologies'   class={style.main}>
         <div class={style.technologies}><h1 >Technologies I’ve Worked With</h1></div>
         <div class={style.frontEnd}>
            <div class={style.title}>
           <h1>    &nbsp;&nbsp;  &nbsp; Frontend   &nbsp;  &nbsp;  &nbsp;</h1>
            </div>
                {/* html */}
            <div id={style.html} class={style.hexagon_container}>
              <div class={style.hexagon}>
                <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/html5/html5-original.svg" alt="HTML" title='HTML' />
              </div>
            </div>
              {/* css */}
               <div id={style.css} class={style.hexagon_container}>

                   <div class={style.hexagon}>
                    <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/css3/css3-original.svg" alt="CSS" title='CSS' />
                  </div>
               </div>
                {/* JS */}
               <div id={style.js} class={style.hexagon_container}>

                   <div class={style.hexagon}>
                    <img src="	https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/javascript/javascript-original.svg" alt="CSS" title='JAVA SCRIPT' />
                  </div>
               </div>
              {/* react */}
               <div id={style.react} class={style.hexagon_container}>
                  <div class={style.hexagon}>
                   <img src="	https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/react/react-original.svg" alt="REACT.JS" title='REACT.JS' />
                 </div>
                 

               </div>
         </div>
         {/* backend  */}
         <div class={style.backEnd }>
             <div class={style.title}>
           <h1>    &nbsp;&nbsp;  &nbsp;  Backend  &nbsp;  &nbsp;  &nbsp;</h1>
            </div>
                {/* java */}
            <div id={style.java} class={style.hexagon_container}>
              <div class={style.hexagon}>
                <img src="	https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/java/java-original.svg" alt="JAVA" title='JAVA' />
              </div>
            </div>
              {/* spring boot */}
               <div id={style.spring} class={style.hexagon_container}>

                   <div class={style.hexagon}>
                    <img src="	https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/spring/spring-original.svg" alt="SPRING BOOT" title='SPRING BOOT' />
                  </div>
               </div>
         </div>
         <div class={style.database}>

             <div class={style.title}>
           <h1>    &nbsp;&nbsp;  &nbsp;  Database  &nbsp;  &nbsp;  &nbsp;</h1>
            </div>
                {/* html */}
            <div id={style.mysql} class={style.hexagon_container}>
              <div class={style.hexagon}>
                <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg" alt="MYSQL" title='MYSQL' />
              </div>
            </div>
         </div>
         <div class={style.tools   }>
           <div class={style.title}>
           <h1>    &nbsp;&nbsp;  &nbsp;  Tools  &nbsp;  &nbsp;  &nbsp;</h1>
            </div>
                {/* git */}
            <div id={style.git} class={style.hexagon_container}>
              <div class={style.hexagon}>
                <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/git/git-original.svg" alt="GIT" title='GIT' />
              </div>
            </div>
              {/* github */}
               <div id={style.github} class={style.hexagon_container}>

                   <div class={style.hexagon}>
                    <img src="	https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/github/github-original.svg" alt="GITHUB" title='GITHUB' />
                  </div>
               </div>
          </div>
        
       </div>
        </>
    )
}   
export default Technologies