import react from 'react'
import style from '../projects/projects.module.css'
import {StarFilled,WechatWorkOutlined,
  FileImageOutlined,BorderOuterOutlined,
  UserOutlined,GithubFilled,ArrowRightOutlined} from '@ant-design/icons'


let Projects =()=>
{
    return (

      
        <>
      <div id='Projects'  class={style.Projects}> 
        <div class={style.title}>
          <h1>Featured Projects</h1>
        </div>
        <div class={style.project1}>
          <aside class={style.peojectimage}>
            <img src="https://cdn0.weddingwire.in/vendor/5990/3_2/960/jpg/catering-kalyan-catering-services-catering-setup-8_15_375990-162635242590605.jpeg" alt="Catering Service" />
        
          </aside>
          <main class={style.peojectinfo}>
            <div class={style.navBar}>
             <div class={style.feature}> <StarFilled /> Featured</div>
             <div class={style.Development}> <StarFilled /> In Development</div>
            </div>
            <div class={style.projectTitle}>
              <h2>Catering Booking Platform </h2>
            </div>
            <div class={style.projectDescription}>
              <p>A full-stack catering booking platform designed to connect customers with catering service providers for family events and celebrations in Hyderabad, making it easier to discover, compare, and book catering services.</p>
              </div> 
             <div class={style.projectTechnologies}>
                <div class={style.React}>  <img src="	https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/react/react-original.svg" alt="REACT.JS" title='REACT.JS' /></div>
                <div class={style.java}><img src="	https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/java/java-original.svg" alt="JAVA" title='JAVA' /></div>
                <div class={style.spring}> <img src="	https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/spring/spring-original.svg" alt="SPRING BOOT" title='SPRING BOOT' /></div>
                <div class={style.gemeni}> 
                  {/* <img src="https://static.vecteezy.com/system/resources/previews/055/687/065/non_2x/gemini-google-icon-symbol-logo-free-png.png" alt="gemini Api" title="GEMENI API" /> */}
                  </div>
                <div class={style.sql}> <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg" alt="MYSQL" title='MYSQL' /></div>
             </div>
            <div class={style.projectFeatures}>
                <div>
                  
                  <span> <WechatWorkOutlined class={style.AI_Chat}/> &nbsp; AI Chat</span>
                </div>
                <div>
                 
                  <span> <FileImageOutlined class={style.Image_Support}/>  &nbsp; Image Support</span>
                </div>
                <div>
                  
                  <span><BorderOuterOutlined class={style.Responsive_Ui}/> &nbsp; Responsive Ui</span>
                </div>
                <div>
                 
                  <span> <UserOutlined class={style.Student_Focused}/> &nbsp; Student Focused</span>

                </div>
            </div>
            <div class={style.projectLinks}>
                <div class={style.github}>
                  <button><GithubFilled /> &nbsp;&nbsp;View on Github</button>
                </div>
                <div class={style.deploymentlink}>
                  <button>View Details &nbsp; &nbsp;<ArrowRightOutlined /></button>

                </div>
            </div>
          </main>
        </div>

        <div class={style.project2}>
          <aside class={style.peojectimage}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwlWR2YNqHyIHL9mDqDVVgCzmaLoJYcqNXfAR9iIlZ5Q&s=10" alt="Student Ai chatBot" /> 
          </aside>
          <main class={style.peojectinfo}>
            <div class={style.navBar}>
             <div class={style.feature}> <StarFilled /> Featured</div>
             <div class={style.Development}> <StarFilled /> In Development</div>
            </div>
            <div class={style.projectTitle}>
              <h2>Student AI Chatbot</h2>
            </div>
            <div class={style.projectDescription}>
              <p>An AI-powered student assistant built with React.js and Spring Boot, integrated with the Gemini API to help students understand concepts, ask questions, and get real-time assistance — including image-based queries.</p>
              </div> 
             <div class={style.projectTechnologies}>
                <div class={style.React}>  <img src="	https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/react/react-original.svg" alt="REACT.JS" title='REACT.JS' /></div>
                <div class={style.java}><img src="	https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/java/java-original.svg" alt="JAVA" title='JAVA' /></div>
                <div class={style.spring}> <img src="	https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/spring/spring-original.svg" alt="SPRING BOOT" title='SPRING BOOT' /></div>
                <div class={style.gemeni}> <img src="https://static.vecteezy.com/system/resources/previews/055/687/065/non_2x/gemini-google-icon-symbol-logo-free-png.png" alt="gemini Api" title="GEMENI API" /></div>
                <div class={style.sql}> <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg" alt="MYSQL" title='MYSQL' /></div>
             </div>
            <div class={style.projectFeatures}>
                <div>
                  
                  <span> <WechatWorkOutlined class={style.AI_Chat}/> &nbsp; AI Chat</span>
                </div>
                <div>
                 
                  <span> <FileImageOutlined class={style.Image_Support}/>  &nbsp; Image Support</span>
                </div>
                <div>
                  
                  <span><BorderOuterOutlined class={style.Responsive_Ui}/> &nbsp; Responsive Ui</span>
                </div>
                <div>
                 
                  <span> <UserOutlined class={style.Student_Focused}/> &nbsp; Student Focused</span>

                </div>
            </div>
            <div class={style.projectLinks}>
                <div class={style.github}>
                  <button><GithubFilled /> &nbsp;&nbsp;View on Github</button>
                </div>
                <div class={style.deploymentlink}>
                  <button>View Details &nbsp; &nbsp;<ArrowRightOutlined /></button>

                </div>
            </div>
          </main>
        </div>
        {/* <div class={style.project2}>project2</div> */}
      </div>
        </>
    )
}

export default Projects;