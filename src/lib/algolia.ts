import algoliasearch from "algoliasearch";
import axios, { AxiosResponse } from "axios";
import { getContents, getMasters } from "./sheet";

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
  const masters = await getMasters();
  const sections = await Promise.all(
    masters.map(async (master) => ({
      master,
      contents: await getContents(master.id),
    }))
  );

  const objects = sections
    .map(({ master, contents }) =>
      contents.map((section) => ({
        objectID: master.id + "/" + section.title,
        title: section.title,
        subtitle: section.subtitle,
        description: section.description,
        page: master.title,
        path: master.path,
      }))
    )
    .flat(1);

  return objects;
};
