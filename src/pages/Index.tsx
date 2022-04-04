import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import IndexCover from "../components/IndexCover";

import BackgroundHS from "../assets/images/バナー_高校文化祭.jpg";
import BackgroundJHS from "../assets/images/バナー_中学文化祭.jpg";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div>
      <Header />
      <IndexCover />
      <div className="container">
        <div className="m-4">
          <Link to="/hs">
            <Banner image={BackgroundHS} />
          </Link>
        </div>
        <div className="m-4">
          <Link to="/jhs">
            <Banner image={BackgroundJHS} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
