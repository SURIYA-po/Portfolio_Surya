import { useState } from 'react'


import './App.css'
import HeaderComponent from './Components/HeaderComponent'
import HeroSection from './Components/HeroSection'
import { ServicesSection,PortfolioSection } from './Components/ServicessSection'
function App() {
  

  return (
    <>
     <HeaderComponent/>
<HeroSection/>
<ServicesSection/>
<PortfolioSection/>
    
    </>
  )
}

export default App
