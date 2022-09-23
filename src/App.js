import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import HatsPage from './pages/homepage/hatspage.component';




import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='hats' element={<HatsPage />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
