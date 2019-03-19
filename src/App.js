import React, { Component } from 'react';

import './style.css';

import Header from './components/Header';
import Main from './components/pages/main';

const App = () => (
    <div className='App'> 
        <Header /> 
        <Main />
    </div>
);

export default App;
