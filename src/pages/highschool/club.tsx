import axios from "axios";
import { useEffect } from "react";
import BasicContent from "../../components/BasicContent";
import SubStyles from "../../styles/BasicContent.module.scss";

type Props = PageProps;
function Club(props: Props) {
  useEffect(() => {
    function scrollAnim() {
      const elements = document.querySelectorAll(".content");

      elements.forEach((elem) => {
        const margin = 200;
        if (window.innerHeight > elem.getBoundingClientRect().top + margin) {
          elem.classList.add(SubStyles.show);
        }
      });
    }
    scrollAnim();
    window.addEventListener("scroll", scrollAnim);
  }, []);

  return (
    <main className="grid gap-4 bg-white px-8 lg:grid-cols-2">
      {Object.entries(props).map(([name, data], index) => (
        <BasicContent
          key={index}
          title={name}
          subtitle={`${(index + 1).toString().padStart(2, "0")}. ${
            data.subtitle
          }`}
          desc={data.description}
          img={data.banner}
          links={[
            { url: "#", text: "全面展望①" },
            { url: "#", text: "全面展望②" },
            { url: "#", text: "全面展望③" },
            { url: "#", text: "ジオラマ紹介" },
          ]}
        />
      ))}
    </main>
  );
}

export default Club;
export async function getStaticProps() {
  const res = await axios.get(
    "https://script.google.com/macros/s/AKfycbykY0npWBOmpSNjAa7PrpT02hAQ_rgo9qbEye3OR9faAEen5nz5kSZdDieuPUxqC0mE/exec?loc=HS_CLUB"
  );

  return {
    props: res.data,
  };
}
