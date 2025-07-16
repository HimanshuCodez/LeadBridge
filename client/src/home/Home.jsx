import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import { Testimonials } from '../components/Testimonials'
import { Footer } from '../components/Footer'
import { FeaturesGrid } from '../components/FeaturesGrid'
import TutorialVideo from '../components/TutorialVideo'
import TrustedBy from '../components/TrustedBy'
import Chart from '../components/Chart'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <TrustedBy/>
        <Chart/>
        <FeaturesGrid/>
        <TutorialVideo/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home