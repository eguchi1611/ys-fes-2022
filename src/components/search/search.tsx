import { MultipleQueriesQuery } from "@algolia/client-search";
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
  const algoliaClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || "",
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ""
  );

  // 検索結果なしのモック情報
  const mock = {
    hits: [],
    nbHits: 0,
    nbPages: 0,
    page: 0,
    processingTimeMS: 0,
  };

  // 空文字の場合は何もない情報をモックして渡す
  const searchClient = {
    ...algoliaClient,
  };

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
