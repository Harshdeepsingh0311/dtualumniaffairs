import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import HomePage from './components/home/HomePage.js'
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import AlumniInitiativesPage from './components/alumniInitiatives/AlumniInitiativesPage.js'

function App() {
  return (
    <>
      <body className='relative z-0'>
      <Navbar />
      {/* <HomePage /> */}
      < AlumniInitiativesPage />
      <Footer />
      </body>
    </>
  )
}

export default App
