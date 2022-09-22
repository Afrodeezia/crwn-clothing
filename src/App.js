import React from 'react';
import HomePage from './pages/homepage/homepage.component';


import { Outlet } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <HomePage />
      <Outlet />
    </div>
  );
}

export default App;
