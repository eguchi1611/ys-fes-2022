import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <nav className="container-xl">
        <Link href="/" passHref>
          <a className="navbar-brand py-0">
            <Image src="/logo.png" height={36} width={64} alt="ロゴアイコン" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" passHref>
                <a className="nav-link">ホーム</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/aisatsu" passHref>
                <a className="nav-link">生徒会長あいさつ</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
