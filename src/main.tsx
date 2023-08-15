import React from 'react'
import ReactDOM from 'react-dom/client' // DOM = Document Object Model
import App from './App.jsx'
// ! = confirm that element exists
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
