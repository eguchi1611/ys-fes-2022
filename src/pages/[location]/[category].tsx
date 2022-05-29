import axios from "axios";
import classNames from "classnames";
import { GetStaticPathsResult, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";
import BasicContent from "../../components/BasicContent";
import SubStyles from "../../styles/BasicContent.module.scss";

type Props = {
  data: PageProps;
};
function Club({ data }: Props) {
  useEffect(() => {
    function scrollAnim() {
      const elements = document.querySelectorAll(".content");

      elements.forEach((elem) => {
        const margin = 100;
        if (window.innerHeight > elem.getBoundingClientRect().top + margin) {
          elem.classList.add(SubStyles.show);
        }
      });
    }
    scrollAnim();
    window.addEventListener("scroll", scrollAnim);
  }, []);

  return (
    <main className="grid gap-4 bg-white px-2 pt-12 sm:px-8 lg:grid-cols-2">
      {Object.entries(data).map(([name, data], index) => (
        <div className={classNames(SubStyles.anim, "content")} key={index}>
          <BasicContent
            title={name}
            subtitle={`${(index + 1).toString().padStart(2, "0")}. ${
              data.subtitle
            }`}
            desc={data.description}
            img={data.banner}
            links={data.movies.map((movieTitle, index) => ({
              text: movieTitle,
              url: data.urls[index],
            }))}
          />
        </div>
      ))}
    </main>
  );
}

export default Club;

type StaticProps = {
  category: string;
  location: string;
};
export async function getStaticProps({
  params,
}: GetStaticPropsContext<StaticProps>) {
  const res = await axios.get(
    `https://script.google.com/macros/s/AKfycbykY0npWBOmpSNjAa7PrpT02hAQ_rgo9qbEye3OR9faAEen5nz5kSZdDieuPUxqC0mE/exec?location=${params?.location}&category=${params?.category}`
  );

  return {
    props: { data: res.data },
  };
}

interface Params extends ParsedUrlQuery {
  location: string;
  category: string;
}

export async function getStaticPaths(): Promise<GetStaticPathsResult<Params>> {
  const paths = [
    ["highschool", "1"],
    ["highschool", "2"],
    ["highschool", "3"],
    ["highschool", "club"],
    ["juniorhighschool", "club"],
  ].map(([location, category]) => ({
    params: {
      location,
      category,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
