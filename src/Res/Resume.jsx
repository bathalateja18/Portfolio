import reaact from 'react'
import style from '../Res/resume.module.css'
import MyResumePDF from '/Users/batha/Desktop/Portfolio/public/Teja_Bathala_Software_Engineer.pdf'

let Resume = () => {
  const fileName = "Teja_Bathala_Resume.pdf";

  // Function to view the PDF in a new tab
  const handleView = () => {
    window.open(MyResumePDF, "_blank", "noopener,noreferrer");
  };
    // Function to download the PDF safely
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = MyResumePDF;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

    return(
        <>  
        <div id='Resume'   class={style.Resume}>
            <div class={style.title}>
                <h1>Resume</h1>
            </div>
            <div class={style.view}>
                 <button class={style.btn_border_reveal} id={style.btn}  onClick={handleView} >  View Resume</button>
       </div>
            <div class={style.download}>
                     <button class={style.btn_border_reveal}  onClick={handleDownload} > Download Resume</button>
                 </div>
        </div>
        </>
    )
}
export default Resume