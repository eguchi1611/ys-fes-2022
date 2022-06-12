import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Template from "../../components/template";
import { request } from "../../utils/sheet";

type Props = {
  sections: Section[];
};

const pageId = "HS_1st";

const Page1st: NextPage<Props> = ({ sections }) => {
  return (
    <>
      <Head>
        <title>高校１年 - 八千代松陰文化祭</title>
      </Head>
      <Template sections={sections} />
    </>
  );
};

export default Page1st;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const sections = await request(pageId);

  return {
    props: {
      sections,
    },
  };
};
