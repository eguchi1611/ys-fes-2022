import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex px-4 py-2 items-center">
      <div className="relative h-16 w-48">
        <Image objectFit="contain" layout="fill" src="/logo.jpg" />
      </div>
      {/* <nav>
        <ul className="flex">
          <li>
            <Link href="/">ホーム</Link>
          </li>
          <li>
            <Link href="/">ホーム</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}

export default Header;
