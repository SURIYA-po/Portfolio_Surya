import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HeaderComponent from './Components/HeaderComponent'
import HeroSection from './Components/HeroSection'
import { PortfolioSection } from './Components/ServicessSection'
import PortfolioItems from './Components/PortfolioItems'
import Footer from './Components/Footer'
import ScrollToHash from './ScroolToHash'
function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        {/* Main Home Page Route */}
        <Route path="/" element={
          <>
            <HeaderComponent/>
            <HeroSection/>
            <PortfolioSection/>
            <Footer/>
          </>
        } />
        
        {/* Portfolio Items Page Route */}
        <Route path="/portfolio" element={<PortfolioItems />} />
      </Routes>
    </Router>
  )
}

export default App
