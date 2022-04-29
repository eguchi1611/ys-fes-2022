import React from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Index from "./pages";
import styles from "styles/App.module.scss";
import classNames from "classnames";

function App() {
  return (
    <div className={classNames("min-h-screen", styles.box)}>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
