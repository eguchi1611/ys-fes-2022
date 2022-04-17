import { ReactElement } from "react";
import styles from "styles/BasicLayout.module.scss";
import Header from "./Header";

export default function getLayout(page: ReactElement) {
  return (
    <div className={styles.box}>
      <header className="absolute top-0 left-0 w-full p-4">
        <Header />
      </header>
      <main className="mx-auto max-w-5xl pt-24">{page}</main>
    </div>
  );
}
