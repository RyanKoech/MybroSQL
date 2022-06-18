//React Imports
import React from 'react'
import ReactDOM from 'react-dom/client'

//External Libraries Imports
import 'flowbite';

//Components Imports
import App from './App'

//App Context
import AppContextProvider from './context/AppContext';

//Styles Imports
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
)
