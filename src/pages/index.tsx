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
};
function Content({ text, url, subtitle, title }: ContentProps) {
  return (
    <ContentTemplate
      title={
        <div className="font-serif">
          <h2 className="text-md pt-16 sm:pt-8">{subtitle}</h2>
          <h1 className="pb-8 text-2xl font-bold sm:text-3xl">{title}</h1>
        </div>
      }
      media={
        <div className="shadow">
          <Image
            alt={"banner"}
            src={
              "https://storage.googleapis.com/ys-fes-2022.appspot.com/%E3%83%90%E3%83%8A%E3%83%BC/%E4%BB%AE%E3%83%8F%E3%82%99%E3%83%8A%E3%83%BC.png"
            }
            width={1080}
            height={1920}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
      }
      content={
        <div className="text-blue-400">
          <Link href={url}>{text}</Link>
        </div>
      }
    />
  );
}

const Home: NextPage = () => {
  return (
    <div className="-mt-16">
      <WelcomeCover />
      <div className="bg-white px-2 pt-8">
        <ContentTemplate
          title={
            <div className="font-serif">
              <h2 className="text-md pt-16 sm:pt-8">生徒会長</h2>
              <h1 className="pb-8 text-2xl font-bold sm:text-3xl">
                生徒会長の挨拶
              </h1>
            </div>
          }
          media={
            <iframe
              src="https://www.youtube.com/embed/yg8BIotkbTs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="aspect-[9/16] w-full rounded-lg"
              allowFullScreen
            ></iframe>
          }
          content={<div>sss</div>}
        />
        <Content
          text="中学クラブページへ"
          url="/juniorhighschool/club"
          title="中学クラブ"
          subtitle="Junior High School Club"
        />
        <Content
          text="高校クラブページへ"
          url="/highschool/club"
          title="高校クラブ"
          subtitle="High School Club"
        />
        <Content
          text="高校１年のページへ"
          url="/highschool/1"
          title="高校１年"
          subtitle="High School 1"
        />
        <Content
          text="高校２年のページへ"
          url="/highschool/2"
          title="高校２年"
          subtitle="High School 2"
        />
        <Content
          text="高校３年のページへ"
          url="/highschool/3"
          title="高校３年"
          subtitle="High School 3"
        />
      </div>
    </div>
  );
};

export default Home;
