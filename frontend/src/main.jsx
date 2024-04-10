import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'


import { UserProvider } from './context/UserContext.jsx'


import { CryptoNewsProvider } from './context/NewsContext.jsx'
import { MessagesProvider } from './context/MessagesContext.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
   
    <UserProvider>
      <CryptoNewsProvider>
        <MessagesProvider>
        <App />
        </MessagesProvider>
        </CryptoNewsProvider>
        </UserProvider>
   
    </BrowserRouter>
  
)
