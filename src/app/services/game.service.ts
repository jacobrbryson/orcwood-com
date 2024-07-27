import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  games: Game[] = [
    {
      key:"jurassic-hats",
      image: "games/jurassic-hats/marketing/jh_icon_512x512.png",
      title: "Jurassic Hats",
      releaseDate: new Date("2023-07-01"),
      description: "Explore the lost universe of Jurassic Hats.  Find diamonds and stars to unlock wands, hats, and even dinosaurs...",
      link: "/games/jurassic-hats/",
      images:[]
    },
    {
    key:"holiday-lockdown",
    image: "2020-10-30.png",
    title: "Holiday Lockdown",
    releaseDate: new Date("2021-01-01"),
    description: "Missing out on hunting for Easter Eggs because of Covid? Join our bunny friends as they search for all sorts of holiday treats!",
    link: "/games/holiday-lockdown/",
    images:[{
      src: "games/holiday-lockdown/hl_ss_1.jpg"
    },
    {
      src: "games/holiday-lockdown/hl_ss_2.jpg"
    },
    {
      src: "games/holiday-lockdown/hl_ss_3.jpg"
    },
    {
      src: "games/holiday-lockdown/hl_ss_4.jpg"
    },
    {
      src: "games/holiday-lockdown/hl_ss_5.jpg"
    },
    {
      src: "games/holiday-lockdown/hl_ss_6.jpg"
    },
    {
      src: "games/holiday-lockdown/hl_ss_7.jpg"
    }]
  },
  {
    key:"second-wind",
    image: "bg-second-wind.png",
    title: "Second Wind",
    releaseDate: new Date("2020-02-01"),
    description: "Solve the mystery of the VCR.  Find the buttons, and rewind time in this 80's themed adventure game.",
    link: "/games/second-wind/"
  },
  {
    key:"many-waterfalls",
    image: "2019-11-05.png",
    title: "Many Waterfalls",
    description: "Explore and photograph the many water falls in this adventure game."
  },
  {
    key:"tea-island",
    image: "tavern.jpg",
    title: "Tea Island",
    description: "Industry vs nature, this RPG lets you decide the fate of the land."
  }];

  getGames():Game[]{
    return this.games;
  }
}

export interface Game {
  key:string,
  image: string,
  title: string,
  releaseDate?: Date,
  link?: string
  description: string,
  images?: Image[]
}

export interface Image{
  src:string;
  alt?:string;
}
