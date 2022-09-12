import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Templates from './components/Templates';
import {BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/templates' element={<Templates />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
