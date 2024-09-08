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
}

export interface Image{
  src:string;
  alt?:string;
}

export interface ResourceLink {
  url: string;
  icon: string;
  title: string;
}

export interface NightlyBuild {
  dateTime: Date;
  url: string;
  size: string;
}

export interface Credit {
  title:string;
  link:string;
  subTitle?:string;
  subLink:string;
}