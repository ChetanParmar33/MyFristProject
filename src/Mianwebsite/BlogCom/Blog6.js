import React from 'react';
import image from "../img/psp.jpg";
import "./Blog6.css";

const Blog6 = (props) => {
  return (     
    <div>    
       <div className='box6' style={{ backgroundImage: `url(${props.imgscr})`}  }>
             <i class="fa-solid fa-location-dot"></i>
            <h3>{props.title}</h3>
            <p>Vist the place</p>
       </div> 
    </div>
   
  )
}

export default Blog6