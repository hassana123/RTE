import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
