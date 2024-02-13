import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/userAuth.jsx'
import { TeamProvider } from './context/teamContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <TeamProvider>
      <App />
    </TeamProvider>
    </AuthProvider>
  </React.StrictMode>,
)
