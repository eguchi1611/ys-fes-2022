import classNames from "classnames";
import Image from "next/image";
import style from "../styles/card.module.scss";

function Card() {
  return (
    <div className="container-fluid font-serif mb-4 d-flex">
      <div className={classNames(style.description, "flex-grow-1")}>
        <div className={classNames(style.title, "mt-4 mb-3")}>
          <div className="py-4">
            <h2 className="fs-6 text-muted mb-0 ms-1">01. Guitar Club</h2>
            <h1 className="fs-2 mb-0 lh-1">ギター部</h1>
          </div>
        </div>
        <div className="mb-3">
          Google
          Guavaとは、オープンソースのJavaライブラリで、Javaのプログラミングで共通して使われるユーティリティライブラリをまとめたもの。主にGoogleのエンジニアによって開発されている。
        </div>
        <div className="mb-3">
          <ul className="list-unstyled">
            <li>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                google.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.image}>
        <div className="shadow-sm">
          <Image
            src="https://storage.googleapis.com/ys-fes-2022.appspot.com/%E3%83%90%E3%83%8A%E3%83%BC/%E9%AB%98%E6%A0%A1%E3%82%AF%E3%83%A9%E3%83%96/ギター部.jpg"
            width={1080}
            height={1920}
            layout="responsive"
            className="rounded"
            alt="ギター部のサムネイル"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
