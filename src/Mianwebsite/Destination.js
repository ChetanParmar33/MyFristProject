import React from "react";
import Comman from "./Comman/Comman";
import Box from "./Componates/Box_with_photo";
import Boxapi from "./Componates/API/Box About";
import Top_Destination from "./Componates/Top_Destination";
import Top_destion_API from "./Componates/API/Top_destion_API";
import Get from "./Componates/Get";
import Footer from "./Componates/Footer";
const Destination =()=>
{
    return(
        <>
       <Comman title="Destination"/>

       <div className='flexsys'>
{
          Boxapi.map((value)=>
          {
            return <Box
            imgscr={value.imgscr}
            title ={value.title}
            stitle = {value.stitle}
            />
          })
    }
</div>



<div className='Top_Destinations'>
      <h1>Top Destinations</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum magnam illum</p>
      <p>maiores adipisci pariatur, eveniet.</p>
</div>

<div className='flexsys2'>
 {
   Top_destion_API.map((value)=>
   {
    console.log(value.imgscr)
     return <Top_Destination
     imgscr={value.imgscr}
     title ={value.title}
     stitle = {value.stitle}
     />
   })
 }
  </div>




<Get/>
<Footer/>





        </>
    )
}

export default Destination;