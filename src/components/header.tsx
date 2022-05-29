import Image from "next/image";
import Link from "next/link";

const links = [
  { text: "ホーム", href: "/" },
  { text: "中学クラブ", href: "/juniorhighschool/club" },
  { text: "高校クラブ", href: "/highschool/club" },
  { text: "高校１年", href: "/highschool/1" },
  { text: "高校２年", href: "/highschool/2" },
  { text: "高校３年", href: "/highschool/3" },
];

function Header() {
  return (
    <header className="flex items-center bg-white px-4 py-2 text-gray-700 shadow">
      <Link href="/">
        <div className="relative mr-auto h-12 w-32 cursor-pointer">
          <Image alt="logo" objectFit="contain" layout="fill" src="/logo.jpg" />
        </div>
      </Link>
      <nav>
        <ul className="flex">
          {links.map(({ text, href }) => (
            <li key={text} className="px-2">
              <Link href={href}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
