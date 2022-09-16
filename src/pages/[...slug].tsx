import axios, { AxiosResponse } from "axios";
import classNames from "classnames";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Card from "../components/card";
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
    
    router.events.on("hashChangeStart", handler);

    return () => {
      router.events.off("hashChangeStart", handler);
    };
  }, []);

  return (
    <div className={classNames("container-md", style.container)}>
      <Head>
        <title>{master.title}</title>
      </Head>
      {master.videoDisabled || <div className="text-center py-5">動画の公開は終了しました。ご視聴ありがとうございました。</div>}
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
  const master = (await getMasters()).find(({ path }) => params?.slug.join("/") === path);
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

async function getMasters(): Promise<Master[]> {
  const response: AxiosResponse<MasterResponse> = await axios.get("https://script.google.com/macros/s/AKfycbz55o9jVBSWTqAGpTldPY-cq5hCv6YePQY3QW5vNoXseoVUXwUmQxpm2VY0dFa81ssA/exec?master=true");

  const data = response.data;

  if (data.error) {
    throw new Error("マスターを取得できませんでした: " + data.errorMessage);
  }
  return data.data;
}

async function getContents(sheetId: string) {
  const url = new URL("https://script.google.com/macros/s/AKfycbz55o9jVBSWTqAGpTldPY-cq5hCv6YePQY3QW5vNoXseoVUXwUmQxpm2VY0dFa81ssA/exec");
  url.searchParams.set("sheet", sheetId);
  const res: AxiosResponse<APIResponse> = await axios.get(url.toString());
  const data = res.data;
  if (data.error) {
    throw new Error(`エラーが発生しました: ${data.errorMessage}`);
  }

  return data.data;
}
