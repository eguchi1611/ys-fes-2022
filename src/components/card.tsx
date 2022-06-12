import classNames from "classnames";
import Image from "next/image";
import style from "../styles/card.module.scss";

type Props = {
  section: Section;
};

function Card({ section }: Props) {
  return (
    <div className="container-fluid font-serif mb-4 d-flex">
      <div className={classNames(style.description, "flex-grow-1")}>
        <div className={classNames(style.title, "mt-4 mb-3")}>
          <div className="py-4">
            <h2
              className={classNames(
                "fs-6 text-muted mb-0 ms-1",
                style.subtitle
              )}
            >
              {section.subtitle}
            </h2>
            <h1 className="fs-2 mb-0 lh-1">{section.title}</h1>
          </div>
        </div>
        <div className="mb-3 pe-2">{section.description}</div>
        <div className="mb-3">
          <ul className="list-unstyled">
            {section.movies.map((movie) => (
              <li key={movie.title}>
                {movie.url ? (
                  <a href={movie.url} target="_blank" rel="noreferrer">
                    {movie.title}
                  </a>
                ) : (
                  <span className="text-decoration-line-through">
                    {movie.title}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={style.image}>
        <div className="shadow-sm bg-white">
          <Image
            src={section.bannerUrl}
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
