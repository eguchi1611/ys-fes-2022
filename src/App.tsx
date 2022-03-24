import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import "./styles/custom.scss";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
