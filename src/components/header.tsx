import Image from "next/image";
import Link from "next/link";

const links = [
  { text: "ホーム", href: "/" },
  { text: "問い合わせ", href: "/info" },
  { text: "テスト", href: "/highschool/club" },
];

function Header() {
  return (
    <header className="flex items-center bg-white px-4 py-2">
      <Link href="/">
        <div className="relative mr-auto h-12 w-32 cursor-pointer">
          <Image objectFit="contain" layout="fill" src="/logo.jpg" />
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
