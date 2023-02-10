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
import img from '../images/mark-hero-alt.jpg'

const Home = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero 
        title="FIREARMS TRAINING"
        text="We offer classes from complete beginners to the highest level of military and law enforcement"
        image={img}
      />
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