import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Main from './main';

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Main/>
        </BrowserRouter>       
    </div>
  )
}

export default App;