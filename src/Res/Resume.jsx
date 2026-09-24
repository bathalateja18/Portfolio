import reaact from 'react'
import style from '../Res/resume.module.css'

let Resume = () => {
    return(
        <>  
        <div id='Resume'   class={style.Resume}>
            <div class={style.title}>title</div>
            <div class={style.view}>view resume </div>
            <div class={style.download}>download resume </div>
        </div>
        </>
    )
}
export default Resume