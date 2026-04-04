import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' // This must match the file you just checked/created
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
