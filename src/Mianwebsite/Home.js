import React from 'react';
import "./Home.css";
import Box from "./Componates/Box_with_photo";
import Top_Destination from './Componates/Top_Destination';
import Get from './Componates/Get';
import Footer from './Componates/Footer';
import Boxapi from "./Componates/API/Box";
import Top_destion_API from "./Componates/API/Top_destion_API";
import More_Featured from './Componates/More_Featured';
const Home = () => {

  return (
    <>
    <div className='find'>
        <div>
        <h1>Find your perfect place.</h1>
        <p>Discover & connect with great places around the world</p>
        </div>
        <div className='search'>
            <input type='text' placeholder='Serach Location'></input>
            <button>Search</button>
        </div>
    </div>

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
    <More_Featured/>
    <Footer/>
    
    </>
  )
}

export default Home;