import react from 'react'
import style from '../footer/footer.module.css'

let Footer = () => {
    return(
        <>  
       <div id={style.footer}>
        <div id={style.info}>info</div>
        <div id={style.links}>links</div>
       </div>
        </>
    )
}
export default Footer