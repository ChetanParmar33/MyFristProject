import React from 'react';
import "./Box_with_photo.css";

const Box_with_photo = (props) => {

  return (
    <div className='mboxall'>    
       <div className='box' style={{ backgroundImage: `url(${props.imgscr})`}  }>
             <i class="fa-solid fa-location-dot"></i>
            <h3>{props.title}</h3>
            <p>Vist the place</p>
       </div> 
    </div>
  )
}

export default Box_with_photo