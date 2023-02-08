import React from 'react'
import AboutUs from '../components/AboutUs'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Navbar from '../components/Navbar'
import Offers from '../components/Offers'
import Quote from '../components/Quote'
import TopBar from '../components/TopBar'
import WhyUs from '../components/WhyUs'

const Home = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <AboutUs />
      <Quote />
      <Offers />
      <WhyUs />
      <Contact />
      <Info />
    </>
  )
}

export default Home