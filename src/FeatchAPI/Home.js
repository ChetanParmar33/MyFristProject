import React, { useState } from 'react';
import "./Home.css";
import HorrorAPI from "./HorrorAPI";
import Animation from './Animation';
import Comedy from './Comedy';

const Home = () => {


  const [mdata,stemdata] = useState(Animation);

  
    const animation=()=>{
      stemdata(Animation);
    };

    const comedy=()=>{
      stemdata(Comedy);
    
    };

    const horror=()=>{
      stemdata(HorrorAPI);
      
    };


  return (
    <>
  
  <div>
    <div className='mvh1'>
      <h1 className='icon'></h1>
  <h1><label>My</label>Movies</h1>
  </div>
  <div className='allbtn'>
    <button onClick={()=>animation()}>Animation</button>
    <button onClick={()=>comedy()}>Commady</button>
    <button onClick={()=>horror()} >Horror</button>
    </div>
    </div>
    <div className='apiproj'>
      
      {
        mdata.map((value)=>{
          if(value.id <= 100){
            return <>
            <div className='mdiv'>
            <div className='imgpost'>
            <img src={value.posterURL} alt="Image Is Not Avalable"></img>
            </div>
            <div className='mpara'>
                  <p>{value.title}</p>
            </div>
                  <div className='mbtn'>
                  <button>Download</button> 
                  </div>     
            </div>
                    </>
          }           
        })
      }    
    </div>

    
    </>
  )
}

export default Home;