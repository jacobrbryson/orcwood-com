import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  team: Member[] = [{
    key:"jenny-wolfer",
    image:"jbw.jpg",
    name:"Jenny Wolfer",
    position:"Graphic Artist",
    title:"Queen Bossy Pants",
    social:[{
      href: "https://www.instagram.com/firebird_ceramics/",
      icon: "logo-instagram",
      alt: "Instagram"
    }]
  },
  {
    key:"lena-wolfer",
    image:"hw.jpg",
    name:"Lena Wolfer",
    position:"Artist",
    title:"Bunny Slayer",
    social:[{
      href: "https://www.instagram.com/lenawolfer/",
      icon: "logo-instagram",
      alt: "Instagram"
    }]
  },
  {
    key:"jon-wilson-lee",
    image:"jwl.jpg",
    name:"Jon Wilson Lee",
    position:"Audio Engineer",
    title:"McCartney-ish",
    social:[{
      href: "https://www.facebook.com/jonwilsonlee/",
      icon: "logo-facebook",
      alt: "Facebook"
    }]
  },
  {
    key:"livia-wolfer",
    image:"livia.jpg",
    name:"Livia Wolfer",
    position:"Audio Engineer",
    title:"CoLIV-19",
    social:[]
  },
  {
    key:"ross-bryson",
    image:"jrb.jpg",
    name:"Ross Bryson",
    position:"Software Engineer",
    title:"MacGyver",
    social:[{
      href: "https://github.com/jacobrbryson",
      icon: "logo-github",
      alt: "GitHub"
    },{
      href: "https://www.facebook.com/ross.bryson.927/",
      icon: "logo-facebook",
      alt: "Facebook"
    },
    {
      href: "https://www.linkedin.com/in/ross-bryson-software-engineer",
      icon: "logo-linkedin",
      alt: "LinkedIn"
    }]
  }];

  getTeam():Member[]{
    return this.team;
  }

}

export interface Member {
  key: string;
  image: string;
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