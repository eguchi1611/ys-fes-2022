import React, { CSSProperties, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import classes from "./App.module.scss";
import { useScrollY } from "./hooks/Scroll";
import BackgroundImage from "./assets/images/background.jpg";
import "./styles/custom.scss";

function App() {
  const scroll = useScrollY();

  useEffect(() => {
    const val = scroll / window.innerHeight;
    window.document.body.style.backgroundImage = `linear-gradient(
      to top,
      rgba(255, 255, 255, ${val}),
      rgba(255, 255, 255, ${val})
    ),
    url(${BackgroundImage})`;
    console.log(val);
  }, [scroll]);

  return (
    <div className={classes.container}>
      <Router>
        <Routes>
          <Route index element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
