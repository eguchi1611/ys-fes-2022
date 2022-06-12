type Section = {
  title: string;
  subtitle: string;
  description: string;
  bannerUrl: string;
  movies: Movies[];
};

type Movies = {
  title: string;
  url: string;
};
