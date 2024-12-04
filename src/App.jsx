import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Movies from './components/Movies';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <div >
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
