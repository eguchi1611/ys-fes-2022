import algoliasearch from "algoliasearch";
import "instantsearch.css/themes/satellite-min.css";
import Link from "next/link";
import {
  Configure,
  Hits,
  InstantSearch,
  SearchBox,
} from "react-instantsearch-hooks-web";

export default function Search() {
  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || "",
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ""
  );

  const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX || "";
  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName={indexName}>
        <Configure hitsPerPage={4} />
        <SearchBox />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </div>
  );
}

function Hit({ hit }: any) {
  const pages: {
    [key: string]: string;
  } = {
    HS_CLUB: "/highschool/club",
    HS_1st: "/highschool/1st",
    HS_2nd: "/highschool/2nd",
    HS_3rd: "/highschool/3rd",
    JHS_CLUB: "/juniorhighschool/club",
  };

  const url = pages[hit.page as string] + "#" + hit.title || "/";

  return (
    <Link href={url} scroll={false}>
      <article className="cursor-pointer" data-bs-dismiss="modal">
        <p className="my-0">{hit.title}</p>
        <p className="my-0">{hit.description}</p>
      </article>
    </Link>
  );
}
