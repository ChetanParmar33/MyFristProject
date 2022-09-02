import React from 'react';
import "./Top_Destination.css";

const Top_Destination = (props) => {
  return (
    <div className='top' >
        <div className='img_1'>
        <img src={props.imgscr}></img>
        </div>
        <div className='text'>
        <h2>{props.title}</h2>
        <p>Visit This Place</p>
        </div>
    </div>
  )
}

export default Top_Destination;