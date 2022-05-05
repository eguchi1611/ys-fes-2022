import { ReactElement } from "react";
import Header from "./header";

type Props = {
  children: ReactElement;
};

function Layout({ children }: Props): ReactElement {
  return (
    <div>
      <header className="fixed">
        <Header />
      </header>
      <main className="pt-16">{children}</main>
    </div>
  );
}

export default Layout;
