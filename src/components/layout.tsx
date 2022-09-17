import classNames from "classnames";
import dynamic from "next/dynamic";
import { ReactElement } from "react";
import style from "../styles/layout.module.scss";
import Chat from "./chatbot/chat";
import Footer from "./footer";
import Header from "./header";
import SearchModal from "./search/search-modal";
const SeishunRabbit = dynamic(() => import("./chatbot/rabbit"), { ssr: false });

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
      <div
        className={classNames("position-fixed bottom-0 end-0", style.rabbit)}
      >
        <div data-bs-toggle="modal" data-bs-target="#chatModal">
          <SeishunRabbit />
        </div>
      </div>
      <Chat />
      <SearchModal />
    </div>
  );
}

export default Layout;
