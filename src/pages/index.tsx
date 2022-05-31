import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentTemplate from "../components/ContentTemplate";
import WelcomeCover from "../components/WelcomeCover";

type ContentProps = {
  text: string;
  url: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  desc: string;
};
function Content({ text, url, title, thumbnail, desc }: ContentProps) {
  return (
    <ContentTemplate
      title={
        <div className="font-serif">
          <h1 className="pt-8 pb-8 text-2xl font-bold sm:text-3xl">{title}</h1>
        </div>
      }
      media={
        <div className="shadow">
          <Image
            alt={"banner"}
            src={thumbnail}
            width={1080}
            height={1920}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
      }
      content={
        <div>
          <p className="mb-4">{desc}</p>
          <div className="rounded-lg bg-blue-400 p-2 text-center text-xl text-white">
            <Link href={url}>{text}</Link>
          </div>
        </div>
      }
    />
  );
}

const Home: NextPage = () => {
  return (
    <div className="-mt-16">
      <WelcomeCover />
      <div className="mx-auto bg-white px-2 pt-8">
        <ContentTemplate
          title={
            <div className="font-serif">
              <h1 className="py-8 text-2xl font-bold sm:text-3xl">
                生徒会長挨拶
              </h1>
            </div>
          }
          media={
            <Image
              alt={"banner"}
              src="https://storage.googleapis.com/ys-fes-2022.appspot.com/%E3%83%90%E3%83%8A%E3%83%BC/生徒会長.jpg"
              width={1080}
              height={1920}
              layout="responsive"
              className="rounded-lg"
            />
          }
          content={
            <div>
              <p className="mb-2">
                今年の文化祭のテーマは「青春を取り戻せ！〜今こそみんなで一つに〜」です。　
              </p>
              <p className="mb-2">
                コロナ禍で様々な活動が制限されてきましたが、待ちに待った松陰祭が開催されます！
              </p>
              <p className="mb-2">
                沢山のクラブや団体が、松陰祭を盛り上げるために創意工夫を凝らし、想いを込めて準備してきました。
              </p>
              みなさん、今しか出来ない青春を全力で楽しみましょう！
              <p className="mb-2">第４２期高校生徒会長</p>
            </div>
          }
        />
        <Content
          text="中学クラブページへ"
          url="/juniorhighschool/club"
          title="中学クラブ"
          subtitle="Junior High School Club"
          thumbnail="https://storage.googleapis.com/ys-fes-2022.appspot.com/%E3%83%90%E3%83%8A%E3%83%BC/中学ハナー.jpeg"
          desc=""
        />
        <Content
          text="高校クラブページへ"
          url="/highschool/club"
          title="高校クラブ"
          subtitle="High School Club"
          thumbnail="https://storage.googleapis.com/ys-fes-2022.appspot.com/%E3%83%90%E3%83%8A%E3%83%BC/高校クラブ.jpeg"
          desc=""
        />
        <Content
          text="高校１年のページへ"
          url="/highschool/1"
          title="高校１年"
          subtitle="High School 1"
          thumbnail="https://storage.googleapis.com/ys-fes-2022.appspot.com/%E3%83%90%E3%83%8A%E3%83%BC/%E4%BB%AE%E3%83%8F%E3%82%99%E3%83%8A%E3%83%BC.png"
          desc="高校１年生は、八千代松陰高等学校を紹介するCMを、クラスごとに工夫を凝らして制作しました。この学校の更なる魅力を発見できますよ！　ぜひご覧ください。"
        />
        <Content
          text="高校２年のページへ"
          url="/highschool/2"
          title="高校２年"
          subtitle="High School 2"
          thumbnail="https://storage.googleapis.com/ys-fes-2022.appspot.com/%E3%83%90%E3%83%8A%E3%83%BC/%E4%BB%AE%E3%83%8F%E3%82%99%E3%83%8A%E3%83%BC.png"
          desc="私たち高校２年生は「世界を知る・世界に挑戦する」という学年テーマのもと各クラスでショートムービーを撮りました。いろいろな角度から考えた「世界」。お楽しみください！"
        />
        <Content
          text="高校３年のページへ"
          url="/highschool/3"
          title="高校３年"
          subtitle="High School 3"
          thumbnail="https://storage.googleapis.com/ys-fes-2022.appspot.com/%E3%83%90%E3%83%8A%E3%83%BC/%E4%BB%AE%E3%83%8F%E3%82%99%E3%83%8A%E3%83%BC.png"
          desc="高校3年生は「青春を取り戻せ！～〇〇つくってみた～」をテーマに各クラス個性豊かな動画を作成しました。一緒に青春しませんか？"
        />
      </div>
    </div>
  );
};

export default Home;
