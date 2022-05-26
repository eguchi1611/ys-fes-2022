import classNames from "classnames";
import Image from "next/image";
import styles from "../styles/BasicContent.module.scss";

type Props = {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  links: {
    url: string;
    text: string;
  }[];
};

function BasicContent({ title, subtitle, desc, img, links }: Props) {
  return (
    <div
      className={classNames(
        "content relative mb-24 flex-row-reverse justify-around sm:flex",
        styles.anim
      )}
    >
      <div className={classNames("relative sm:w-5/12", styles.imageWrapper)}>
        <Image
          src={img}
          width={720}
          height={1080}
          layout="responsive"
          className="z-10 rounded-lg"
        />
        <div
          className={classNames(
            "absolute top-0 left-0 h-full w-full",
            styles.overlay
          )}
        >
          <div className="absolute top-0 left-0 h-full w-full rounded-lg bg-black opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-full p-4 text-right text-white">
            <ul className="font-serif leading-normal">
              {links.map(({ url, text }) => (
                <li key={text}>
                  <a
                    className="hover:underline"
                    href={url}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="-mt-16 px-4 text-neutral-600 sm:mt-0">
        <div className={classNames(styles.title, "mb-8 mt-8 font-serif")}>
          <h2 className="text-md pt-16 sm:pt-8">{subtitle}</h2>
          <h1 className="pb-8 text-2xl font-bold sm:text-3xl">{title}</h1>
        </div>
        <p className="text-md sm:max-w-xs">{desc}</p>
      </div>
    </div>
  );
}

export default BasicContent;
