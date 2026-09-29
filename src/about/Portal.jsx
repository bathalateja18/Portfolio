// import React, { useState } from 'react'
// import ReactDom from 'react-dom'
// import style from './portal.module.css'
// const Portal = (proops) => {
//     let {loginVisible,updateLoginVisibility}=proops.click
//     let [userName,setUserName]=useState({})
//     let updateUserName=(val)=>
//         {
//             console.log(val);
            
//     // setUserName(...userName,[val.target.name]=val.target.value);
//     }
//     let seeDetails=(e)=>
//     {
//         e.preventDefault()
//         console.log(userName);
        
//     }
    
//     // console.log("in portals ...",loginVisible);
    
//     let Portals=()=>{
//         return(<section>
//                 {/* <h1>Sign in </h1> */}
//             <form action="" onSubmit={seeDetails}>
//                 {/* <div >
//                     <label htmlFor="">Username : </label>
//                     <input type="text" name='user' onChange={updateUserName} />
//                 </div>
//                 <div>
//                     <label htmlFor="">Password : </label>
//                     <input type="password"  />
//                 </div>
//                 <div>
//                     <input type="submit" value="Submit"/>
//                 </div> */}
//                 <div id={style.cancle}>
//                     <h2 onClick={updateLoginVisibility}>×</h2>
//                 </div>
                
//             </form>
//         </section>)
//     }
//   return ReactDom.createPortal(<Portals/>,document.getElementById('portal-root')) 
  

// }

// export default Portal