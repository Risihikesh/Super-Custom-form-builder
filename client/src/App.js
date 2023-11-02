import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuccessPage from "./Pages/SuccessPage/SuccessPage";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="success" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
