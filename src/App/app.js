import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Views/Home/home";
import Faqs from "./Views/Faqs/Faqs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<Faqs />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
