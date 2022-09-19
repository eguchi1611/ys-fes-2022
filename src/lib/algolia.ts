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

  console.log(JSON.stringify(objects));

  return objects;

  // const sheetUrl =
  //   "https://script.google.com/macros/s/AKfycbz55o9jVBSWTqAGpTldPY-cq5hCv6YePQY3QW5vNoXseoVUXwUmQxpm2VY0dFa81ssA/exec";

  // const pageObjects = await Promise.all(
  //   pages.map(async (page) => {
  //     const res0: AxiosResponse<CMSResponse<Section[]>> = await axios.get(
  //       `${sheetUrl}?sheet=${page}`
  //     );
  //     const res = res0.data;
  //     if (res.error === false) {
  //       const sections = res.data;
  //       return sections.map((section) => ({
  //         objectID: page + "~" + section.title,
  //         title: section.title,
  //         subtitle: section.subtitle,
  //         description: section.description,
  //         page: page,
  //       }));
  //     }

  //     return [];
  //   })
  // );

  // const objects = pageObjects.reduce((previous, current) =>
  //   previous.concat(current)
  // );

  return [];
};
