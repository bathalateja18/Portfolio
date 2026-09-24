import react from 'react'
import style from'../contact/contact.module.css'

let Contact = () => {
    return(
        <>
       <div id='Contact' class={style.contactInfo}> 
        <div class={style.title}>title</div>
        <div class={style.contactDetails}>contactDetails</div>
        <div class={style.contactForm}>contactForm</div>
       </div>
        </>
    )
}
export default Contact