import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MainForm } from './components/Form.jsx'
import './styles/App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainForm />
  </StrictMode>,
)
