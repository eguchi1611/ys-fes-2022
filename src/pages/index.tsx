import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/card";
import Welcome from "../components/welcome";

const sections: Section[] = [
  {
    bannerUrl:
      "https://storage.googleapis.com/ys-fes-2022.appspot.com/%E3%83%90%E3%83%8A%E3%83%BC/生徒会長.jpg",
    description:
      "今年の文化祭のテーマは「青春を取り戻せ！〜今こそみんなで一つに〜」です。\nコロナ禍で様々な活動が制限されてきましたが、待ちに待った松陰祭が開催されます！\n沢山のクラブや団体が、松陰祭を盛り上げるために創意工夫を凝らし、想いを込めて準備してきました。\nみなさん、今しか出来ない青春を全力で楽しみましょう！\n第４３期高校生徒会長",
    title: "生徒会長挨拶",
  },
  {
    bannerUrl:
      "https://storage.googleapis.com/ys-fes-2022.appspot.com/%E3%83%90%E3%83%8A%E3%83%BC/%E4%B8%AD%E5%AD%A6%E3%83%8F%E3%82%99%E3%83%8A%E3%83%BC.jpeg",
    title: "中学クラブ",
    subtitle: "Junior High School Club",
    localUrls: [{ text: "中学クラブページへ", url: "/juniorhighschool/club" }],
  },
  {
    bannerUrl:
      "https://storage.googleapis.com/ys-fes-2022.appspot.com/%E3%83%90%E3%83%8A%E3%83%BC/高校クラブ.jpeg",
    title: "高校クラブ",
    subtitle: "High School Club",
    localUrls: [{ text: "高校クラブページへ", url: "/highschool/club" }],
  },
  {
    bannerUrl:
      "https://storage.googleapis.com/ys-fes-2022.appspot.com/%E3%83%90%E3%83%8A%E3%83%BC/高校１年.JPG",
    title: "高校１年",
    subtitle: "High School 1st",
    localUrls: [{ text: "高校１年のページへ", url: "/highschool/1st" }],
    description:
      "高校１年生は、八千代松陰高等学校を紹介するCMを、クラスごとに工夫を凝らして制作しました。この学校の更なる魅力を発見できますよ！　ぜひご覧ください。",
  },
  {
    bannerUrl:
      "https://storage.googleapis.com/ys-fes-2022.appspot.com/%E3%83%90%E3%83%8A%E3%83%BC/高校２年.png",
    title: "高校２年",
    subtitle: "High School 2nd",
    localUrls: [{ text: "高校２年のページへ", url: "/highschool/2nd" }],
    description:
      "私たち高校２年生は「世界を知る・世界に挑戦する」という学年テーマのもと各クラスでショートムービーを撮りました。いろいろな角度から考えた「世界」。お楽しみください！",
  },
  {
    bannerUrl:
      "https://storage.googleapis.com/ys-fes-2022.appspot.com/%E3%83%90%E3%83%8A%E3%83%BC/高校３年.jpeg",
    title: "高校３年",
    subtitle: "High School 3rd",
    localUrls: [{ text: "高校３年のページへ", url: "/highschool/3rd" }],
    description:
      "高校3年生は「青春を取り戻せ！～〇〇つくってみた～」をテーマに各クラス個性豊かな動画を作成しました。一緒に青春しませんか？",
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>八千代松陰文化祭</title>
      </Head>
      <div style={{ marginTop: "-4rem" }}>
        <Welcome />
      </div>
      <div className="container-sm mt-4">
        {sections.map((section) => (
          <Card key={section.title} section={section} />
        ))}
      </div>
    </div>
  );
};

export default Home;
