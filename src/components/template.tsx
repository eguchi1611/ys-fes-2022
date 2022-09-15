import classNames from "classnames";
import { useRouter } from "next/router";
import { useEffect } from "react";
import style from "../styles/template.module.scss";
import Card from "./card";

type Props = {
  sections: Section[];
};

function Template({ sections }: Props) {
  const router = useRouter();

  useEffect(() => {
    const handler = (url: string) => {
      const hash = decodeURIComponent(url.split("#")[1]);
      if (hash) {
        const elem = document.querySelector(`[data-name='${hash}']`);
        elem?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };

    handler(router.asPath);

    router.events.on("hashChangeStart", handler);

    return () => {
      router.events.off("hashChangeStart", handler);
    };
  }, []);

  return (
    <div className={classNames("container-md", style.container)}>
      <div className="row row-cols-1 row-cols-lg-2">
        {sections.map((section) => (
          <div className="col" key={section.title}>
            <Card data-name={section.title} section={section} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Template;
