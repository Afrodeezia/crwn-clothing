import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';


import firebase from './firebase/firebase.utils';


import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
      setUser: null
    }
  } 
  
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = firebase.auth().onAuthStateChanged(user => {
      this.setState({setUser: user});

      console.log(user); 
    
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
    
  render() {
  return (

    <BrowserRouter>
      
      <Header setUser={this.state.setUser}/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signIn' element={<SignInAndSignUpPage />} />
      </Routes>
      
    </BrowserRouter>


  );
  
}
}

export default App;

