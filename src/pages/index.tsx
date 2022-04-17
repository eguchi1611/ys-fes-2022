import c from "classnames";
import Header from "components/Header";
import IndexCover from "components/IndexCover";
import PageContent from "components/PageContent";
import { ReactElement } from "react";
import styles from "styles/Index.module.scss";

export default function Index() {
  return (
    <>
      <IndexCover />
      <main>
        <PageContent />
      </main>
    </>
  );
}

Index.getLayout = (page: ReactElement) => (
  <div>
    {page}
    <div className={c(styles.header, "absolute top-0 left-0 w-full p-4")}>
      <Header />
    </div>
  </div>
);
