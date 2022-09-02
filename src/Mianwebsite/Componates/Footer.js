import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='fbg'>
    <div className='footer_main'>
        <div className='aboutf'>
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur <br></br> adipisicing elit. Aut, quod!</p>
            <p>
            <i class="fa-solid fa-location-dot"></i>
                34 Street Name, City Name Here, United <br></br>States
                </p>
            <p>
            <i class="fa-solid fa-phone"></i>
                +1 242 4942 290</p>
            <p><i class="fa-solid fa-envelope"></i>
                info@yourdomain.com</p>
        </div>

        <div>
                <h3>Links</h3>
                <p>About</p>
                <p>Destination</p>
                <p>Contact</p>
        </div>

    <div className='blog_Name'>
            <h3>Latest Blog</h3>
            <small>March 20, 2018</small>
            <p>7 Best Destination in The World</p>
            <small>March 20, 2018</small>
            <p>4 Hour Work Week And The Rest Is Travel</p>
            <small>March 20, 2018</small>
            <p>Why You Should Travel Today</p>
    </div>

    <div className='contextf'>
            <h3>Connect</h3>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
    </div>

    </div>

    <div className='cpoy'>
        <p>Copyright ©2022 All rights reserved | This template is made with  by Chetan</p>
    </div>
    </div>
  )
}

export default Footer