import classNames from "classnames";
import Card from "./card";
import style from "../styles/template.module.scss";

type Props = {
  sections: Section[];
};

function Template({ sections }: Props) {
  return (
    <div className={classNames("container-md", style.container)}>
      <div className="row row-cols-1 row-cols-lg-2">
        {sections.map((section) => (
          <div key={section.title} className="col">
            <Card section={section} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Template;
