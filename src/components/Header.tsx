import Link from "next/link";
import styles from "styles/Header.module.scss";
import c from "classnames";
import { useLogin } from "hooks/AuthHook";

export default function Header() {
  return (
    <div className="flex px-4 py-2 text-white">
      <h1 className="my-auto mr-auto truncate text-xl">八千代松陰文化祭</h1>
      <nav className="my-auto mr-4 hidden md:block">
        <ul className="flex">
          {menulist.map(({ text, path }) => (
            <li key={text} className={c("px-1", "px-2", styles.item)}>
              <Link href={path}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <LoginButton />
    </div>
  );
}

const LoginButton = () => {
  const { signIn } = useLogin();

  return (
    <button className="rounded-full bg-sky-400 px-4 py-3" onClick={signIn}>
      ログイン
    </button>
  );
};

const menulist = [
  { text: "HOME", path: "/" },
  { text: "HS CLUB", path: "/highschool/club" },
  { text: "HS 1ST", path: "/highschool/1st" },
  { text: "HS 2ND", path: "/highschool/2nd" },
  { text: "HS 3RD", path: "/highschool/3rd" },
  { text: "JHS CLUB", path: "/juniorhighschool/club" },
  { text: "JHS 1ST", path: "/juniorhighschool/1st" },
  { text: "JHS 2ND", path: "/juniorhighschool/2nd" },
  { text: "JHS 3RD", path: "/juniorhighschool/3rd" },
];
