import Image from "next/image";
import styles from "../styles/BasicContent.module.scss";

type Props = {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
};

function BasicContent({ title, subtitle, desc, img }: Props) {
  return (
    <div className="flex">
      <div className="w-5/12">
        <Image src={img} width={720} height={960} layout="responsive" />
      </div>
      <div className="">
        <h2>{subtitle}</h2>
        <h1 className={styles.title}>{title}</h1>
        <p className="max-w-md">{desc}</p>
      </div>
    </div>
  );
}

export default BasicContent;
