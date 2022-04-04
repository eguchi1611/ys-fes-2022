import React from "react";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Index from "./pages/Index";
import "./styles/custom.scss";
import AppBackground from "./components/AppBackground";

import HSIndex from "./pages/hs/Index";
import HSGrade1 from "./pages/hs/Grade1";
import HSGrade2 from "./pages/hs/Grade2";
import HSGrade3 from "./pages/hs/Grade3";
import HSClub from "./pages/hs/Club";

import JHSIndex from "./pages/jhs/Index";
import JHSGrade1 from "./pages/jhs/Grade1";
import JHSGrade2 from "./pages/jhs/Grade2";
import JHSGrade3 from "./pages/jhs/Grade3";
import JHSClub from "./pages/jhs/Club";

function App() {
  return (
    <>
      <AppBackground />
      <main>
        <Router>
          <Routes>
            <Route index element={<Index />} />
            <Route path="/hs" element={<Outlet />}>
              <Route index element={<HSIndex />} />
              <Route path="grade1" element={<HSGrade1 />} />
              <Route path="grade2" element={<HSGrade2 />} />
              <Route path="grade3" element={<HSGrade3 />} />
              <Route path="club" element={<HSClub />} />
            </Route>
            <Route path="/jhs" element={<Outlet />}>
              <Route index element={<JHSIndex />} />
              <Route path="grade1" element={<JHSGrade1 />} />
              <Route path="grade2" element={<JHSGrade2 />} />
              <Route path="grade3" element={<JHSGrade3 />} />
              <Route path="club" element={<JHSClub />} />
            </Route>
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
