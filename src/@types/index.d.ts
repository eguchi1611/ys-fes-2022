type PageProps = {
  name: string;
  location: string;
  banner: string;
  desc: string;
};

type MetadataList = {
  [name: string]: Metadata;
};

type Metadata = {
  name: string;
};
