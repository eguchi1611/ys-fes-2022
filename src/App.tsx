import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import "./styles/custom.scss";
import AppBackground from "./components/AppBackground";

function App() {
  return (
    <>
      <AppBackground />
      <main>
        <Router>
          <Routes>
            <Route index element={<Index />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
