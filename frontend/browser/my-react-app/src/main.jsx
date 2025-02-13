import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/note.css'
import './css/buttons.css'
import './css/header.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
