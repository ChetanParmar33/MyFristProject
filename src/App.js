import React from 'react';
import Main from './Mianwebsite/Main';
import { BrowserRouter} from 'react-router-dom';
import Header from './Mianwebsite/Header';
import image from "./Mianwebsite/img/psp.jpg";

const App = () => {
  return (
    <div>
        <BrowserRouter>

        <div className='bg'style={{ backgroundImage: `url(${image})`}  }>
            <Header/>
            <Main></Main>
        </div>
        </BrowserRouter>       
    </div>
  )
}

export default App;