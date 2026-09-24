import react from 'react'
import style from '../projects/projects.module.css'

let Projects =()=>
{
    return (
        <>
      <div id='Projects'  class={style.Projects}> 
        <div class={style.title}>title</div>
        <div class={style.project1}>project1</div>
        <div class={style.project2}>project2</div>
      </div>
        </>
    )
}

export default Projects;