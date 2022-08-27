import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Test1 from './components/pages/test1';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Test2 from './components/pages/test2';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Test1' element={<Test1 />} />
          <Route path='/Test2' element={<Test2 />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
