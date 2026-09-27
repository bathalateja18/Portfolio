import react from 'react'
import style from '../prof_Experience/professionExperience.module.css'
let PrefessionalExperience = () => {
    return(
        <>  
            <div id='prefossionExperience'    class={style.main}>
                <div class={style.title}>
                    <h1>&nbsp;&nbsp;&nbsp; Professional Experience </h1>
                    
                </div>
                <div class={style.experience1}>
                   
                        <div class={style.role}>
                            <h2>Software Engineer Intern</h2>
                        </div>
                        <div className={style.companyName1}>
                            <p><b>Mindeed Technologies and Services Pvt Ltd,Chennai</b> <span class={style.duration}>|  June 2025 - July 2025 </span> </p>
                        </div>
                        <div class={style.roleDescription}>
                            <ul>
                                <li>Designed and structured MySQL database schemas for merchant onboarding and payment transaction workflows, establishing key table relationships to ensure data integrity and secure storage.</li><br />
                                <li>Configured server-side loggers to automatically mask credit/debit card details, ensuring compliance and secure internal logging practices.</li> <br />
                                <li>Implemented custom database indexing in MySQL on high-frequency lookup columns for merchant onboarding and transaction workflows, improving overall application performance by 15%.</li>
                            </ul>
                        </div>
                  
                    
                 </div>
            </div>
        </>
    )
}
export default PrefessionalExperience