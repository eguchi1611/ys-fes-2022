import { ReactElement } from "react";
import Header from "./header";

type Props = {
  children: ReactElement;
};

function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
