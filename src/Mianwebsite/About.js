import React from "react";
import Comman from "./Comman/Comman";
import image from "../Mianwebsite/img/b2.webp";
import "./About.css";
import Top_Destination from "./Componates/Top_Destination";
import Tdata from "./Componates/API/Team";
import Footer from "./Componates/Footer";
import Get from "./Componates/Get";
const About = ()=>
{
    return(
        <>
        <Comman title="About"/>
        <div className="main_about_us">
            <div className="about_img">
                <img src={image}></img>
            </div>
            <div className="about_img text_About">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque perferendis, laudantium quod architecto velit ad officiis facere eveniet in fuga fugiat delectus rerum doloribus quos consectetur unde, expedita, quibusdam corporis impedit quia sequi aliquid sit. Ducimus labore molestias odio nam necessitatibus laboriosam vero saepe enim nobis. Repudiandae quidem, sint earum dolorum consequuntur dignissimos excepturi mollitia omnis aliquid, corporis, unde!
                <br></br>
                <br></br>
                Esse, rem, ab. Ab ipsum at eligendi aliquam veritatis vel cupiditate odio mollitia minima impedit. Explicabo dolores aut accusantium et aliquam inventore aperiam deleniti, veritatis nihil! Odit consectetur eius tempora necessitatibus possimus earum, totam pariatur. Alias id officiis atque laboriosam laudantium esse quidem est ad perspiciatis porro, non quaerat, accusamus ipsam quis adipisci, reiciendis mollitia quos sequi et nemo. Eveniet.
                </p>
                
            </div>
        </div>

 <div className='Top_Destinations aboutteam'>
      <h1>Team</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum magnam illum</p>
      <p>maiores adipisci pariatur, eveniet.</p>
</div>


<div className='flexsys2'>
 {
   Tdata.map((value)=>
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

export default About;