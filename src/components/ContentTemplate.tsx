import classNames from "classnames";
import { ReactElement } from "react";
import styles from "../styles/BasicContent.module.scss";

type Props = {
  media: ReactElement;
  title: ReactElement;
  content: ReactElement;
};

function ContentTemplate({ media, title, content }: Props) {
  return (
    <div
      className={classNames(
        "content relative mb-24 flex flex-row-reverse justify-around"
      )}
    >
      <div className={classNames("relative z-10 w-5/12", styles.imageWrapper)}>
        {media}
      </div>
      <div className="mt-0 w-7/12 px-4 text-neutral-600">
        <div className={classNames(styles.title, "mb-8 mt-8")}>{title}</div>
        {content}
      </div>
    </div>
  );
}

export default ContentTemplate;
