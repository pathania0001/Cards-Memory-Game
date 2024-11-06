import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GameContextProvider from './Context/GameContextProvider.jsx'

createRoot(document.getElementById('root')).render(
   <GameContextProvider>
     <App />
   </GameContextProvider>
)
