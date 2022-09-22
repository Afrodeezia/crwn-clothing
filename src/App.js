import React from 'react';

import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import HatsPage from './pages/homepage/hatspage.component';




import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} >
          <Route path='/hats' element={<HatsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
