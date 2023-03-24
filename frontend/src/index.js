import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import App from './App';
import './index.css';
// import { Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
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
