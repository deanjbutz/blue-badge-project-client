import './App.css';
import FetchPractice from './components/FetchPractice/FetchPractice';
import React, { useEffect, useState } from 'react';
import Auth from './auth/Auth'
require('dotenv').config();


function App() {

  const [sessionToken, setSessionToken] = useState('');

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

    // const clearToken = () => {
    //     localStorage.clear();
    //     setSessionToken('');
    // }

  return (
    <div className="App">
      <Auth updateToken={updateToken}/>
    </div>
  );
}

export default App;
