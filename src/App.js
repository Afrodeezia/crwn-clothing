import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import HatsPage from './pages/homepage/hatspage.component';




const YoPage = () => (
  <div>
    <h1>YO PAGE</h1>
  </div>
);



function App() {
  return (
    
      <div>
      <BrowserRouter>
      
       <Routes>
         <Route path='/' element={<HomePage />} >
         <Route path='/hats' element={<HatsPage />} />
         <Route path='/page' element={<YoPage />} />
         </Route>
       </Routes>
       
       </BrowserRouter>
     </div>
  );
}






export default App;
