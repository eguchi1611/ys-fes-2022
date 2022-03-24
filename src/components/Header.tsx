import React from "react";
import classes from "./Header.module.scss";

function Header() {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.header}>
        <div>文化祭タイトル</div>
      </div>
    </div>
  );
}

export default Header;
