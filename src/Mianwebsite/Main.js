import React from 'react';
import Home from './Home';
import Destination from './Destination';
import Blog from './Blog';
import About from './About';
import Contact from './Contact';
import { Routes , Route} from 'react-router-dom';

const Main = () => {
  return (
    <div>
        <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='/Home' element={<Home/>} />
            <Route path='/Destination' element={<Destination/>} />
            <Route path='/Blog' element={<Blog/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Contact' element={<Contact/>} />
        </Routes>
    </div>
  )
}

export default Main;