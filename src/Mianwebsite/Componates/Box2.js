import React from 'react';
import "./Box2.css";

const Box2 = (props) => {

  return (
    <div>    
       <div className='boxss' style={{ backgroundImage: `url(${props.imgscr})`}  }>
             <i class="fa-solid fa-location-dot"></i>
            <h3>{props.title}</h3>
            <p>Vist the place</p>
       </div> 
    </div>
  )
}

export default Box2;