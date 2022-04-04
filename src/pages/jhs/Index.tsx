import React from "react";
import { Link } from "react-router-dom";

function Index() {
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
