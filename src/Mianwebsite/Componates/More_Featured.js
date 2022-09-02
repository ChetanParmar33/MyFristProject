import React from 'react';
import Box2 from './Box2';
import Boxapi from "./API/Box"

const More_Featured = () => {
  return (
    <div className='main_Featured'>

<div className='Featured'>
 <h1>More Featured <br></br>Destinations</h1>
 <p>Far far away, behind the word mountains,<br></br>
   far from the countries Vokalia and Consonantia, <br></br>
   there live the blind texts.</p>
<div className='arrow2'>
<i class="fa-solid fa-arrow-left-long"></i>
<i class="fa-solid fa-arrow-right-long"></i>
</div>
</div>

<div>
  
<div className='flexsys3'>
{
          Boxapi.map((value)=>
          {
            return <Box2
            imgscr={value.imgscr}
            title ={value.title}
            stitle = {value.stitle}
            />
          })
    }
</div>

</div>



</div>
  )
}

export default More_Featured