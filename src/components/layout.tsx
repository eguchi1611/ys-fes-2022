import { ReactElement } from "react";
import Header from "./header";
import Rabbit from "./Rabbit";

type Props = {
  children: ReactElement;
};

function Layout({ children }: Props): ReactElement {
  return (
    <div className="relative bg-[url(https://firebasestorage.googleapis.com/v0/b/ys-fes-2022.appspot.com/o/banners%2Fbackground.jpeg?alt=media&token=21ce9c27-44c0-4ed8-b906-e21d1d28106d)] bg-cover bg-fixed bg-center">
      <div className="fixed z-10 w-full">
        <Header />
      </div>
      <div className="pt-16">{children}</div>
      <div className="fixed bottom-0 right-0 z-10 p-2">
        <Rabbit />
      </div>
    </div>
  );
}

export default Layout;
