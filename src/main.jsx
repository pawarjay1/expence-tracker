import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Datacontext } from './context/Datacontext.jsx'

createRoot(document.getElementById('root')).render(
  <Datacontext>
    <StrictMode>
      <App />
    </StrictMode>
  </Datacontext>
  ,
)
