import reaact from 'react'
import style from '../Res/resume.module.css'

let Resume = () => {
    return(
        <>  
        <div id='Resume'   class={style.Resume}>
            <div class={style.title}>
                <h1>Resume</h1>
            </div>
            <div class={style.view}>
                <button>view resume</button> </div>
            <div class={style.download}>
                <button>download resume</button>
             </div>
        </div>
        </>
    )
}
export default Resume