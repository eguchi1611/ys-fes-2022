type PageProps = {
  [clubName: string]: Group;
};

type Group = {
  description: string;
  subtitle: string;
  banner: string;
  movies: string[];
  urls: string[];
};
