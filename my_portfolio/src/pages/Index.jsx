import React from 'react'
import Navbar from '../components/NavbarSection'
import AboutSection from '../components/AboutSection'
import HeroSection from '../components/HeroSection'
import SkillsSection from '../components/SkillsSection'
import Footer from '../components/FooterSection'
import ContactSection from '../components/ContactSection'
import ProjectsSection from '../components/ProjectsSection'

const Index = () => {
  return (
    <div className='min-h-screen'>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />

    </div>
  )
}

export default Index