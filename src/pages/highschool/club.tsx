import { useEffect } from "react";
import BasicContent from "../../components/BasicContent";
import SubStyles from "../../styles/BasicContent.module.scss";

function Club() {
  useEffect(() => {
    function scrollAnim() {
      const elements = document.querySelectorAll(".content");

      elements.forEach((elem) => {
        const margin = 300;
        if (window.innerHeight > elem.getBoundingClientRect().top + margin) {
          console.log("add");
          elem.classList.add(SubStyles.show);
        }
      });
    }
    scrollAnim();
    window.addEventListener("scroll", scrollAnim);
  }, []);

  return (
    <main className="grid gap-4 px-8 lg:grid-cols-2">
      {[...Array(5)].map((_value, index) => (
        <BasicContent
          key={index}
          title="ギター部"
          subtitle="GUITAR CLUB"
          desc="こんにちは。ギター部です。私達ギター部の最大の強みは、部員の多さからなる、多様な演奏です!　三年生はこれが集大成。ぜひ私達の”青春”を聴いてください!"
          img="https://firebasestorage.googleapis.com/v0/b/ys-fes-2022.appspot.com/o/banners%2FSAMPLE.jpg?alt=media&token=9f9078cd-3b29-4377-837e-0cc7de5a905a"
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
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbykY0npWBOmpSNjAa7PrpT02hAQ_rgo9qbEye3OR9faAEen5nz5kSZdDieuPUxqC0mE/exec?loc=HS_CLUB"
  );

  console.log(new Date());

  console.log(res.json());

  return {
    props: {},
  };
}
