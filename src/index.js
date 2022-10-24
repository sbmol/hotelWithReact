import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Nosotros from './components/Nosotros';
import Tarifas from './components/Tarifas';
import Servicios from './components/Servicios';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/tarifas" element={<Tarifas />} />
      <Route path="/servicios" element={<Servicios />} />
    </Routes>
    <a
        href="https://wa.me/2348100000000"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
