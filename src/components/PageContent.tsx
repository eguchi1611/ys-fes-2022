import Image from "next/image";
import styles from "styles/PageContent.module.scss";
import c from "classnames";

export default function PageContent() {
  return (
    <div className={c(styles.box, "relative")}>
      <Image src="/images/banners/1st.jpg" layout="fill" priority />
    </div>
  );
}
