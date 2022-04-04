import React from "react";
import c from "classnames";
import classes from "./Banner.module.scss";

interface Props {
  image: string;
}

function Banner({ image }: Props) {
  return (
    <div className={c(classes.box)}>
      <img src={image} className={c(classes.bgimage)} />
    </div>
  );
}

export default Banner;
