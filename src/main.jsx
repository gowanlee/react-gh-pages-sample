import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap'
import './assets/all.scss'
// import './index.css'

createRoot(document.getElementById('root')).render(
  // 嚴格模式
  <StrictMode>
    <App />
  </StrictMode>,
)
