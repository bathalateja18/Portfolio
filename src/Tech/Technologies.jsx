import react from 'react'
import style from '../Tech/technologies.module.css'

let Technologies = () => {
    return(
        <>  
       <div id='Technologies'   class={style.main}>
         <div class={style.technologies}>technologies</div>
         <div class={style.frontEnd}>frontEnd</div>
         <div class={style.backEnd }>backEnd</div>
         <div class={style.database}>database</div>
         <div class={style.tools   }>tools</div>
         {/* <div id={style.space   }>space</div> */}
       </div>
        </>
    )
}   
export default Technologies