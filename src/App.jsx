import React from 'react';
import Hello from './Hello';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Projects from './Projects';
import Curriculum from './Curriculum';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/CV" element={<Curriculum />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
