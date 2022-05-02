import classNames from "classnames";
import { useMetadata } from "hooks/MetadataHook";
import { usePageData } from "hooks/PageDataHook";
import React from "react";
import { useParams } from "react-router";
import styles from "styles/BasicPage.module.scss";

function BasicPage() {
  const route = useParams();

  const pageKey = `${route.type};${route.page}`;

  const pageData = usePageData();

  const metadata = useMetadata();

  if (pageData === undefined || metadata === undefined) {
    return <p>読み込み中...</p>;
  } else if (pageData === null || metadata === null) {
    return <p>データがありません</p>;
  }

  const data: PageProps[] = pageData.filter(
    ({ location }) => location === pageKey
  );

  return (
    <main className="pt-24">
      <h1 className="bg-neutral-600 py-4 text-center text-4xl font-bold text-white md:py-10">
        {metadata[pageKey]?.name}
      </h1>
      {data.map((props, index) => (
        <div
          className={classNames("flex px-4 py-8 md:p-16", {
            "flex-row-reverse": index % 2 === 0,
          })}
          key={props.name}
        >
          <img src={props.banner} className="w-5/12 object-cover" />
          <div className={classNames("ml-4 mt-4 w-full md:mt-16")}>
            <div
              className={classNames(
                styles.title,
                { "before:-left-20 after:-left-20": index % 2 === 0 },
                {
                  "before:-right-4 after:-right-4 md:before:-right-16 md:after:-right-16":
                    index % 2 !== 0,
                },
                "relative pr-2 font-serif text-neutral-600 md:pl-24"
              )}
            >
              <div className="pt-4 md:pb-4 md:pt-16 md:text-xl">
                01. TETSUDO MOKEI
              </div>
              <h2
                className={classNames(
                  "mb-4 text-2xl font-bold md:mb-16 md:text-5xl"
                )}
              >
                {props.name}
              </h2>
            </div>
            <p className="mt-8 max-w-2xl text-gray-500 md:p-20 md:text-xl">
              {props.desc}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
}

export default BasicPage;
