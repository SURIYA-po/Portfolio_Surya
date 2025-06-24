import { useState } from 'react'


import './App.css'
import HeaderComponent from './Components/HeaderComponent'
import HeroSection from './Components/HeroSection'
import { PortfolioSection } from './Components/ServicessSection'
import Footer from './Components/Footer'
function App() {
  

  return (
    <>
     <HeaderComponent/>
<HeroSection/>


<PortfolioSection/>

    <Footer/>
    </>
  )
}

export default App
