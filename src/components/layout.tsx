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
      <main className="pt-16">{children}</main>
    </>
  );
}

export default Layout;
