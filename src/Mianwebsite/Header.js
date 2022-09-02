import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";


const Header = () => {
  return (    
       <div class="header_main">
            <div class="head1">
                <h1>LISTED</h1>
            </div>

            <div class="head2">
                <Link className='link' to="/Home">Home</Link>
                <Link  className='link' to="/Destination">Destination</Link>
                <Link  className='link' to="/Blog">Blog</Link>
                <Link  className='link' to="/About">About</Link>
                <Link  className='link' to="/Contact">Contact</Link>
            </div>
        </div>
  )
}

export default Header;