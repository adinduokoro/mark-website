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
import Home from './pages/Home';
import Layout from './pages/Layout.js'
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import LocationPage from './pages/LocationPage'
import TrainingPage from './pages/TrainingPage';




function App() {
  return (

      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='location' element={<LocationPage />} />
          <Route path='training' element={<TrainingPage />} />
          <Route path='faq' element={<FaqPage />} />
          <Route path='contact' element={<ContactPage />} />
        {/* body */}
        {/* footer */}

        </Route>
    </Routes>



  );
}

export default App;
