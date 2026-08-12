import React from "react";  
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ErrorBoundary>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </ErrorBoundary>
  </React.StrictMode>
);
