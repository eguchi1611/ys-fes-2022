type PageProps = {
  [clubName: string]: Group;
};

type Group = {
  description: string;
  subtitle: string;
  movies: string[];
  urls: string[];
};
