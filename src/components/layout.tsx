import classNames from "classnames";
import { ReactElement } from "react";
import style from "../styles/layout.module.scss";
import Footer from "./footer";
import Header from "./header";

type Props = {
  children: ReactElement;
};

function Layout({ children }: Props) {
  return (
    <>
      <div className="position-relative">
        <Header />
      </div>
      <div className={classNames(style.main, "min-vh-100 position-relative")}>
        {children}
      </div>
      <div className="container-md">
        <Footer />
      </div>
    </>
  );
}

export default Layout;
