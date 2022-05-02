import { onValue, ref } from "firebase/database";
import { database } from "firebaseconfig";
import { useEffect, useState } from "react";

function useMetadata() {
  const [data, setData] = useState<MetadataList | null | undefined>();

  useEffect(
    () =>
      onValue(ref(database, "metadata"), (snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          setData(null);
        }
      }),
    []
  );

  return data;
}

export { useMetadata };
