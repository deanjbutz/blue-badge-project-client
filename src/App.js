import './App.css';
// import FetchPractice from './components/FetchPractice/FetchPractice';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import Auth from './auth/Auth';
import CharacterIndex from './characters/CharacterIndex';
import { Modal } from 'reactstrap'
require('dotenv').config();


function App() {

  const [sessionToken, setSessionToken] = useState('');
  const [loginSignup, setLoginSignup] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const toggleLoginSignup = () => {
    (loginSignup) ?
      setLoginSignup(false) :
      setLoginSignup(true)
  }

  useEffect(() => {
    toggleLoginSignup()
  }, [sessionToken])

  return (
    <div className="App">
      <Navbar clearSession={clearToken} toggleLoginSignup={toggleLoginSignup} />
      {
        (loginSignup && !localStorage.getItem('token')) ?
          <Auth updateToken={updateToken} toggleLoginSignup={toggleLoginSignup} /> :
          null
      }

      <CharacterIndex token={sessionToken} />
    </div>
  );
}

export default App;
