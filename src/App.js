import React from 'react';
import logo from './logo.svg';
import './App.css';
import Increment from './Components/increment'
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Increment/>
        </header>
        <increment/>
    </div>
  );
}

export default App;


  

