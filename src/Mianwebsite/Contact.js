import React from 'react';
import Comman from './Comman/Comman';
import "./Contact.css";
import Top_destination from "./Componates/Top_Destination";
import Top_destion_API from "./Componates/API/Top_destion_API";
import Get from "./Componates/Get";
import Footer from "./Componates/Footer";

const Contact = () => {
  return (
    <div>
      <Comman title="Contact"/>
         


          <div className='main_Contact'>
          <div className='Contact_text_from'>
                <h3>Say "Hi", Don't be shy.</h3>
                <br></br>
                <br></br>
                  <p>Name</p>
                  <input type="text"></input>
                  <p>Phone</p>
                  <input type="text"></input>
                  <p>Email</p>
                  <input type="text"></input>
                  <p>Write Message</p>
                  <textarea></textarea>
                  <button className='send_msg'>Send Message</button>
          </div>
          <div className='Contact_text_from'>
          <div className='aboutf contactptage'>
            <h3>Contact Info</h3>
            <br></br>
                <br></br>
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

          </div>
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
     return <Top_destination
     imgscr={value.imgscr}
     title ={value.title}
     stitle = {value.stitle}
     />
   })
 }
  </div>




<Get/>
<Footer/>












    </div>

  

  )
}

export default Contact;