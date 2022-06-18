//React Imports
import React from 'react'
import ReactDOM from 'react-dom/client'

//External Libraries Imports
import 'flowbite';

//Components Imports
import App from './App'

//App Context Imports
import AppContextProvider from "./context/AppContext";

//Style Imports
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
)
