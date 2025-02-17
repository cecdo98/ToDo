import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/note.css'
import './css/buttons.css'
import './css/header.css'
import "./css/LoginPage.css"
import "./css/RegisterPage.css"
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  
      <App />
    </BrowserRouter>
  </StrictMode>,
)
