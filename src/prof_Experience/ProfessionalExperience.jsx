import react from 'react'
import style from '../prof_Experience/professionExperience.module.css'
let PrefessionalExperience = () => {
    return(
        <>  
            <div id='prefossionExperience'    class={style.main}>
                <div class={style.title}>
                    <h1>Professional Experience </h1>
                    
                </div>
                <div class={style.experience1}>
                    <div>
                        <div>
                            <h2>Software Engineer Intern</h2>
                        </div>
                        <div>
                            <p><b>Mindeed Technologies and Services Pvt Ltd,Chennai</b> | June 2025 - July 2025</p>
                        </div>
                        <div>
                            <ul>
                                <li>Built scalable database with mysql </li>
                                <li>Built a server side where it mask the user card credentials</li>
                                <li>optimise the sql queries with indexing for fast look up</li>
                            </ul>
                        </div>
                    </div>
                    
                 </div>
            </div>
        </>
    )
}
export default PrefessionalExperience