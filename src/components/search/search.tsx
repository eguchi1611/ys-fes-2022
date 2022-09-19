import algoliasearch from "algoliasearch";
import "instantsearch.css/themes/satellite-min.css";
import Link from "next/link";
import {
  Configure,
  Hits,
  InstantSearch,
  SearchBox,
} from "react-instantsearch-hooks-web";
import { UrlObject } from "url";

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

type HitProps = {
  hit: Hit;
};

function Hit({ hit }: HitProps) {
  const url: UrlObject = { pathname: hit.path, hash: hit.title };

  return (
    <Link href={url} scroll={false}>
      <article className="cursor-pointer" data-bs-dismiss="modal">
        <p className="my-0">{hit.title}</p>
        <p className="my-0">{hit.description}</p>
      </article>
    </Link>
  );
}
