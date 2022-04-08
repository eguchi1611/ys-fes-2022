import React from "react";
import { Link } from "react-router-dom";
import Thumbnail from "./utils/Thumbnail";

interface Props {
  data: PageData[];
}

function IndexPage({ data }: Props) {
  return (
    <div className="container">
      {data.map(({ banner, url }) => (
        <Link to={url} key={url} className="mb-3 d-block">
          <Thumbnail url={banner} />
        </Link>
      ))}
    </div>
  );
}

export default IndexPage;
