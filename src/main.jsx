import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Categories from './components/Categories.jsx'

import Footer from './components/Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Categories />
    <Footer />

  </StrictMode>,
)
