import React from "react";
import { Link } from "react-router-dom";
import IndexPage from "../../components/IndexPage";

function Index() {
  const data: PageData[] = [
    { banner: "banners/grade1.jpg", url: "grade1" },
    { banner: "banners/grade2.jpg", url: "grade2" },
    { banner: "banners/grade3.jpg", url: "grade3" },
    { banner: "banners/club.jpg", url: "club" },
  ];

  return <IndexPage data={data} />;

  return (
    <ul>
      <li>
        <Link to="grade1">１年生</Link>
      </li>
      <li>
        <Link to="grade2">２年生</Link>
      </li>
      <li>
        <Link to="grade3">３年生</Link>
      </li>
      <li>
        <Link to="club">クラブ</Link>
      </li>
    </ul>
  );
}

export default Index;
