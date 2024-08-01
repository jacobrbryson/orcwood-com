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
  },{
    key:"mike-wallace",
    image:"team/mike.jpg",
    name:"Mike Wallace",
    position:"Systems Architect",
    title:"Ox",
    social:[]
  },{
    key:"allen-clawson",
    image:"team/herikane.jpg",
    name:"Allen Clawson",
    position:"Game Designer",
    title:"Claw",
    social:[]
  },
  {
    key:"josh-green",
    image:"team/josh.jpg",
    name: "Josh Green",
    position: "Software Engineer",
    title:"UnexampledSalt",
    social:[{
      href: "https://github.com/JDSlimz",
      icon: "logo-github",
      alt: "Github"
    },
  { href: "https://www.linkedin.com/in/joshua-green-a4254b238",
    icon: "logo-linkedin",
    alt: "Linkedin"
  }]
  },
  {
    key:"xeno-d",
    image:"team/brendon.jpg",
    name:"Brendon Alexander",
    position:"Developer",
    title:"Xeno",
    social:[]
  },];

  getTeam():Member[]{
    return this.team;
  }

}

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