import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Footer from './components/Footer.tsx';
import Navbar from './components/Navbar.tsx';
import HomePage from './components/home/HomePage.tsx';
import AlumniInitiativesPage from './components/alumniInitiatives/AlumniInitiativesPage.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/initiatives" element={<AlumniInitiativesPage />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
)
