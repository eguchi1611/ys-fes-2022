import React from "react";

interface Props {
  url: string;
}

function List({ url }: Props) {
  return <div>List: {url}</div>;
}

export default List;
