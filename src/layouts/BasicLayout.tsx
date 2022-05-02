import classNames from "classnames";
import Header from "components/Header";
import React, { ReactElement } from "react";
import styles from "styles/App.module.scss";

type Props = {
  children: ReactElement;
};

function BasicLayourt({ children }: Props) {
  return (
    <div className={classNames("min-h-screen", styles.box)}>
      <Header />
      <div className="">{children}</div>
    </div>
  );
}

export default BasicLayourt;
