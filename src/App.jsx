import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";




function App() {
  return (
    <BrowserRouter>
   
    <AppRoutes />
  </BrowserRouter>
  );
}

export default App;
