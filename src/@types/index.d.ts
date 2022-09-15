type Section = {
  title: string;
  subtitle?: string;
  description?: string;
  bannerUrl?: string;
  movies?: Movies[];
  localUrls?: LocalURL[];
};

type Movies = {
  title: string;
  url: string;
};

type LocalURL = {
  text: string;
  url: string;
};

type CMSResponse<T> = {
  error: boolean;
  data: T;
};
