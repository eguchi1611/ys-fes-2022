import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "firebaseconfig";

function usePageData() {
  const [pageProps, setPageProps] = useState<PageProps[] | null | undefined>();
  useEffect(
    () =>
      onValue(ref(database, "pages"), (snapshot) => {
        if (snapshot.exists()) {
          setPageProps(snapshot.val());
        } else {
          setPageProps(null);
        }
      }),
    []
  );

  return pageProps;
}

export { usePageData };
