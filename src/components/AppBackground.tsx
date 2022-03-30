import React, { CSSProperties } from "react";
import BackgroundImage from "../assets/images/background.jpg";
import { useScrollY } from "../hooks/Scroll";
import classes from "./AppBackground.module.scss";

function AppBackground() {
  const scroll = useScrollY();

  const bgStyle: CSSProperties = {
    opacity: Math.max(1 - scroll / window.innerHeight, 0.5),
  };

  return (
    <div className={classes.background}>
      <img
        src={BackgroundImage}
        alt="バックグラウンド"
        className={classes.image}
        style={bgStyle}
      />
    </div>
  );
}

export default AppBackground;
