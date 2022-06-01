import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <>
        <Head>
          <title>八千代松陰文化祭</title>
        </Head>
        <Component {...pageProps} />
      </>
    </Layout>
  );
}

export default MyApp;
