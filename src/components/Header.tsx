import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import logo from "assets/images/logo.jpeg";
import classNames from "classnames";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="text-md fixed top-0 left-0 z-10 flex w-full items-center justify-between bg-white px-2 py-1 text-black md:px-8">
      <Link to="/">
        <img
          src={logo}
          className={classNames("block h-20 w-40 object-cover")}
        />
      </Link>
      <SearchBar />
      <div className="hidden md:flex">
        <Navigation />
        <LoginButton />
      </div>
    </div>
  );
}

export default Header;

function Navigation() {
  const links = [
    { to: "/", text: "ホーム" },
    { to: "/highschool/club", text: "ヘルプ" },
    { to: "/highschool/3", text: "お問い合わせ" },
  ];

  return (
    <nav>
      <ul className="flex h-full text-xl">
        {links.map(({ to, text }) => (
          <li key={to} className="px-2">
            <Link to={to} className="">
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
