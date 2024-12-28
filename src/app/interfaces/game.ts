export interface Game {
  key: string;
  image?: string;
  title: string;
  releaseDate?: Date;
  link?: string;
  description: string;
  images?: Image[];
  html5Url?: string;
  projectManagerKey: string;
  resourceLinks?: ResourceLink[];
  contributorKeys?: string[];
  nightlyBuilds?: NightlyBuild[];
  credits?: Credits;
}

export interface Image {
  src: string;
  alt?: string;
}

export interface ResourceLink {
  url: string;
  icon: string;
  title: string;
  admin?: boolean;
}

export interface NightlyBuild {
  icon: string;
  dateTime: Date;
  url: string;
  size: string;
}

export interface Credits {
  gameKey: string;
  audio: Credit[];
  assets: Credit[];
}

export interface Credit {
  title: string;
  link: string;
  subTitle: string;
  subLink?: string;
}
