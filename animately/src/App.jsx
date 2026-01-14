import React from 'react'
import Navbar from './assets/components/Navbar'
import Hero from './assets/Pages/Hero'
import Courses from './assets/Pages/Courses'
import Section1 from './assets/components/Section1'
import Section2 from './assets/components/Section2'
import Footer from './assets/components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Courses/>
      <Section1/>
      <Section2/>
      <Footer/>
    </div>
  )
}

export default App
