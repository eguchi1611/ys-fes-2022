import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Template from "../../components/template";
import { request } from "../../utils/sheet";

type Props = {
  sections: Section[];
};

const pageId = "HS_3rd";

const Page3rd: NextPage<Props> = ({ sections }) => {
  return (
    <>
      <Head>
        <title>高校３年 - 八千代松陰文化祭</title>
      </Head>
      <div className="text-center py-5">
        動画の公開は終了しました。ご視聴ありがとうございました。
      </div>
      <Template sections={sections} />
    </>
  );
};

export default Page3rd;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const sections = await request(pageId);

  return {
    props: {
      sections,
    },
  };
};
