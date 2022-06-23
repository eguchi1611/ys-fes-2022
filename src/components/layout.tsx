import classNames from "classnames";
import dynamic from "next/dynamic";
import { ReactElement } from "react";
import style from "../styles/layout.module.scss";
import Chat from "./chat";
import Footer from "./footer";
import Header from "./header";
const SeishunRabbit = dynamic(() => import("./rabbit"), { ssr: false });

function WrappedRabbit() {
  return (
    <div data-bs-toggle="modal" data-bs-target="#chatModal">
      <SeishunRabbit />
    </div>
  );
}

type Props = {
  children: ReactElement;
};

function Layout({ children }: Props) {
  return (
    <div className="position-relative">
      <Header />
      <div className={classNames(style.main, "min-vh-100 position-relative")}>
        {children}
      </div>
      <div className="container-md">
        <Footer />
      </div>
      <div className="position-fixed bottom-0 end-0" style={{ zIndex: 1 }}>
        <WrappedRabbit />
      </div>
      <Chat />
    </div>
  );
}

export default Layout;
