import axios, { AxiosResponse } from "axios";
import classNames from "classnames";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Card from "../components/card";
import { getContents, getMasters } from "../lib/sheet";
import style from "../styles/template.module.scss";

type Props = {
  master: Master;
  sections: Section[];
};

function MainPage({ master, sections }: Props) {
  const router = useRouter();

  useEffect(() => {
    const handler = (url: string) => {
      if (!url.includes("#")) return;
      const hash = decodeURIComponent(url.split("#")[1]);

      const elem = document.querySelector(`[data-name='${hash}']`);
      elem?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    handler(router.asPath);

    router.events.on("hashChangeComplete", handler);
    router.events.on("routeChangeComplete", handler);

    return () => {
      router.events.off("hashChangeComplete", handler);
      router.events.off("routeChangeComplete", handler);
    };
  }, []);

  return (
    <div className={classNames("container-md", style.container)}>
      <Head>
        <title>{master.title}</title>
      </Head>
      {master.videoDisabled || (
        <div className="text-center py-5">
          動画の公開は終了しました。ご視聴ありがとうございました。
        </div>
      )}
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

export default MainPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getMasters();
  return {
    paths: data.map(({ path }) => ({
      params: { slug: path.split("/") },
    })),
    fallback: false,
  };
};

type Query = {
  slug: string[];
};

export const getStaticProps: GetStaticProps<{}, Query> = async ({ params }) => {
  const master = (await getMasters()).find(
    ({ path }) => params?.slug.join("/") === path
  );
  if (!master) {
    throw new Error("マスターが見つかりませんでした。");
  }

  const sheet = await getContents(master.id);

  return {
    props: {
      sections: sheet,
      master: master,
    },
  };
};
