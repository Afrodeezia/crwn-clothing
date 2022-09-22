import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import App from './App.js';
import HatsPage from './pages/homepage/hatspage.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<App />} >
          <Route path='/hats' element={<HatsPage />} />
        </Route>
      </Routes>

      </BrowserRouter>
  </React.StrictMode>
);

