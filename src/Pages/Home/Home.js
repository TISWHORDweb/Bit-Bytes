import React from 'react'
import Navbar from '../../Components/Navbar'
import Banner from './Banner'
import Features from './Features'
import Discover from './Discover'
import Contribution from './Contribution'
import ContactCard from '../../Components/ContactCard'
import Footer from '../../Components/Footer'
import Section1 from './Section1'
import Contact from './Contact'

function Home() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Section1 />
        <Features />
        <Contribution />
        <Discover />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home