import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HeaderComponent from './Components/HeaderComponent'
import HeroSection from './Components/HeroSection'
import { PortfolioSection } from './Components/ServicessSection'
import Project from './Components/Project'
import Footer from './Components/Footer'
import ScrollToHash from './ScroolToHash'
import LoginPage from './adminpanel/pages/LoginPage'
import RegisterForm from './adminpanel/Forms/RegisterForm'
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
        <Route path="/portfolio" element={
          <>
           <HeaderComponent/>
          <Project />
           <Footer/>
          </>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  )
}

export default App
