import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Navbar from './pages/Navbar.tsx'
import './index.css'
import Hero from './pages/Hero.tsx'
import AboutUs from './pages/AboutUs.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar/>
    <App />
    <Hero/>
    <AboutUs/>
    </React.StrictMode>,
)
