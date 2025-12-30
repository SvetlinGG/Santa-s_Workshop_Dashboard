import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query';
import {queryClient} from "./queryClient";
import App from './App.jsx'
import './styles/globals.css'
import { playButtonSound } from './utils/sounds.js';


document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn') || e.target.closest('.btn') || 
      e.target.tagName === 'A' || e.target.closest('a')) {
    playButtonSound();
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
