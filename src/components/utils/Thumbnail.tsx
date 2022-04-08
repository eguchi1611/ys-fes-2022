import { getDownloadURL, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { storage } from "../../firebase";
import classes from "./Thumbnail.module.scss";

interface Props {
  url: string;
}

function Thumbnail({ url }: Props) {
  const [src, setSrc] = useState<string | undefined>();
  useEffect(() => {
    getDownloadURL(ref(storage, url)).then((val) => {
      setSrc(val);
    });
  }, [url]);

  return <img src={src} className={classes.image} />;
}

export default Thumbnail;
