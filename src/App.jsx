import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShowcaseSection/>
    <FeatureCards/>
    <ExperienceSection/>
    </>
  )
}

export default App
