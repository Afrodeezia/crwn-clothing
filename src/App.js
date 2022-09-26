import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx'

import './App.css';


function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Header />
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;

