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
              <Link href="/juniorhighschool/club" passHref>
                <a className="nav-link">中学クラブ</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/highschool/club" passHref>
                <a className="nav-link">高校クラブ</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/highschool/1" passHref>
                <a className="nav-link">高校１年</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/highschool/2" passHref>
                <a className="nav-link">高校２年</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/highschool/3" passHref>
                <a className="nav-link">高校３年</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
