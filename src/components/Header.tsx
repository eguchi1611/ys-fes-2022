import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

function Header() {
  return (
    <div className="flex text-white px-8 py-4 text-xl">
      <h1 className="mr-auto">八千代松陰学園 第44回文化祭</h1>
      <Navigation />
      <LoginButton />
    </div>
  );
}

export default Header;

function Navigation() {
  const links = [
    { to: "/", text: "ホーム" },
    { to: "/help", text: "ヘルプ" },
  ];

  return (
    <nav>
      <ul className="flex">
        {links.map(({ to, text }) => (
          <li key={to} className="px-2">
            <Link to={to}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
