import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Contact from './routes/Contact';

import Home_Page from './routes/Home_Page';
// import Home_Page from './routes/Home_Page';
import Pricing from './routes/Pricing'
import Training from './routes/Training';
// import Artist from './components/Artist';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home_Page/>} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/training' element={<Training />} />
               {/* <Route path='/Artist' element={<Artist />} />  */}
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
