import React from 'react';
import "./Get.css";
import image from "../img/water.jpg"

const Get = () => {
  return (
    <div className='mrgtop'>
        <div style={{ backgroundImage: `url(${image})`} } className="bg2">
            <h2>Get 10% off On Your Next Travel</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quidem tempore</p>
            <p>expedita facere facilis, dolores!</p>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default Get