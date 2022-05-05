import { ReactElement } from "react";
import Header from "./header";

type Props = {
  children: ReactElement;
};

function Layout({ children }: Props): ReactElement {
  return (
    <>
      <div className="fixed w-full">
        <Header />
      </div>
      <div className="pt-16">{children}</div>
    </>
  );
}

export default Layout;
