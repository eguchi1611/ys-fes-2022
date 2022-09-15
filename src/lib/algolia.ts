import algoliasearch from "algoliasearch";
import axios, { AxiosResponse } from "axios";

export const generateIndex = async (): Promise<void> => {
  // CMSからインデックスを取得
  const objects = await getSearchObjects();

  // Algoliaに登録
  const client = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || "",
    process.env.ALGOLIA_ADMIN_API_KEY || ""
  );
  const index = client.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX || "");
  const res = await index
    .saveObjects(objects, {
      autoGenerateObjectIDIfNotExist: true,
    })
    .catch(console.error);
};

const getSearchObjects = async () => {
  const sheetUrl =
    "https://script.google.com/macros/s/AKfycbz55o9jVBSWTqAGpTldPY-cq5hCv6YePQY3QW5vNoXseoVUXwUmQxpm2VY0dFa81ssA/exec";
  const pages = ["HS_CLUB", "HS_1st", "HS_2nd", "HS_3rd", "JHS_CLUB"];
  const objects0 = await Promise.all(
    pages.map(async (page) => {
      const res0: AxiosResponse<CMSResponse<Section[]>> = await axios.get(
        `${sheetUrl}?sheet=${page}`
      );
      const res = res0.data;
      if (res.error === false) {
        const sections = res.data;
        return sections.map((section) => ({
          objectID: page + "~" + section.title,
          title: section.title,
          subtitle: section.subtitle,
          description: section.description,
          page: page,
        }));
      }

      return [];
    })
  );

  const objects = objects0.reduce((previous, current) =>
    previous.concat(current)
  );
  return objects;
};
