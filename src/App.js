import React from 'react';
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './Pages/Homepage/Homepage';
import About from './Pages/About/About';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/user:id" element={<User />} />
        <Route path="/user/:id/education" element={<Education />} />
        <Route path="/user/:id/career" element={<Career />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
