import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import React from 'react';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer/>
  </StrictMode>,
)

// createRoot(document.getElementById('root')).render(
//   <div>
//     <App />
//     <ToastContainer/>
//   </div>,
// )

