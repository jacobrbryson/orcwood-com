export interface Member {
  key: string;
  image: string | null;
  name: string;
  position: string;
  title: string;
  social: Social[]
}

export interface Social {
  icon: string;
  href: string;
  alt: string;
}