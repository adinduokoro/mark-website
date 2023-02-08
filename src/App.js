import React from 'react';
import './styles.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js'
import TopBar from './components/TopBar.js'
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Quote from './components/Quote';
import Offers from './components/Offers';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Info from './components/Info';




function App() {
  return (
    <div className="App">
      <div className="app__container">
          <TopBar />
          <Navbar />
          <Hero />
          <AboutUs />
          <Quote />
          <Offers />
          <WhyUs />
          <Contact />
          <Info />
      {/* body */}
      {/* footer */}
</div>
</div>

  );
}

export default App;
