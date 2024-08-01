import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  games: Game[] = [
    {
      key:"trivia-crawler",
      image: "games/trivia-crawler/banner-square.jpg",
      title: "Trivia Crawler",
      releaseDate: new Date("2026-01-01"),
      description: "Jackbox-ish dungeon crawler / turn-based RPG where your party answers trivia questions instead of dice rolls",
      link: "/games/trivia-crawler/",
      images:[],
      projectManager: "jon-wilson-lee"
    },
    {
      key:"new-america",
      image: "games/new-america/banner-square.jpg",
      title: "New America",
      releaseDate: new Date("2026-01-01"),
      description: "First-person offense and third-party real time strategy game based on Sega's 1990's first million player multiplayer game",
      link: "/games/new-america/",
      images:[],
      projectManager: "mike-wallace"
    },
    {
      key:"downside-up",
      image: "games/downside-up/banner-square.png",
      title: "Downside Up",
      releaseDate: new Date("2025-01-01"),
      description: "Arcade game where gravity is flipped on it's head",
      link: "/games/downside-up/",
      images:[],
      html5Url:"https://storage.googleapis.com/downside-up-game/index.html",
      projectManager: "mike-wallace"
    },
    {
      key:"death-sentence",
      image: "games/death-sentence/banner-square.jpg",
      title: "Death Sentence",
      releaseDate: new Date("2025-07-01"),
      description: "Death Sentence is a thrilling co-op first-person objective focused extraction game",
      link: "/games/death-sentence/",
      images:[],
      projectManager: "allen-clawson"
    },
    {
      key:"jurassic-hats",
      image: "games/jurassic-hats/marketing/jh_icon_512x512.png",
      title: "Jurassic Hats",
      releaseDate: new Date("2023-07-01"),
      description: "Explore the lost universe of Jurassic Hats.  Find diamonds and stars to unlock wands, hats, and even dinosaurs...",
      link: "/games/jurassic-hats/",
      images:[],
      projectManager: "ross-bryson"
    },
    {
      key:"the-quarry-chapter-zero",
      image: "games/the-quarry-chapter-zero/banner-square.jpg",
      title: "The Quarry - Chapter 0",
      releaseDate: new Date("2025-01-01"),
      description: "You wake up to find yourself trapped in an alpine cabin in the woods with no clear means of escape. You've lost your memory, but it seems you knew this might happen.  Follow the clues to escape and unlock the mystery within.",
      link: "/games/the-quarry-chapter-zero/",
      images:[],
      projectManager: "jenny-wolfer"
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
    }],
    projectManager: "jenny-wolfer"
  },
  {
    key:"second-wind",
    image: "bg-second-wind.png",
    title: "Second Wind",
    releaseDate: new Date("2020-02-01"),
    description: "Solve the mystery of the VCR.  Find the buttons, and rewind time in this 80's themed adventure game.",
    link: "/games/second-wind/",
    projectManager: "jenny-wolfer"
  },
  {
    key:"many-waterfalls",
    image: "2019-11-05.png",
    title: "Many Waterfalls",
    description: "Explore and photograph the many water falls in this adventure game.",
    projectManager: "jenny-wolfer"
  },
  {
    key:"tea-island",
    image: "tavern.jpg",
    title: "Tea Island",
    description: "Industry vs nature, this RPG lets you decide the fate of the land.",
    projectManager: "ross-bryson"
  }];

  getGames():Game[]{
    return this.games;
  }
}

export interface Game {
  key:string,
  image?: string,
  title: string,
  releaseDate?: Date,
  link?: string
  description: string,
  images?: Image[],
  html5Url?:string,
  projectManager:string,
}

export interface Image{
  src:string;
  alt?:string;
}
