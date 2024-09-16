import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import HomePage from './components/home/HomePage.js'

function App() {
  return (
    <>
      <body className='relative z-0'>
      <Navbar />
      <HomePage />
      <Footer />
      </body>
    </>
  )
}

export default App
