import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Navbar from './pages/Navbar.tsx'
import './index.css'
import Hero from './pages/Hero.tsx'
import AboutUs from './pages/AboutUs.tsx'
import Transition from './pages/Transition.tsx'
import VisionMission from './pages/VisionMission.tsx'
import Goal from './pages/Goal.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar/>
    <App />
    <Hero/>
    <AboutUs/>
    <Transition/>
    <VisionMission/>
    <Goal/>
    </React.StrictMode>,
)
