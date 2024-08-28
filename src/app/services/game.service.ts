import { Injectable } from '@angular/core';
import { Member } from './team.service';

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
      projectManagerKey: "jon-wilson-lee",
      resourceLinks: [
        {
          url: "https://drive.google.com/drive/folders/1N22PJTwOUk3ROdLf2923f2hfSPeCqYE_",
          icon: "logo-google",
          title: "Shared Drive"
        },
        {
          url: "https://orcwood.atlassian.net/jira/core/projects/TC/board",
          icon: "bar-chart-outline",
          title: "Jira Board"
        },
        {
          url: "https://docs.google.com/forms/d/e/1FAIpQLSd8w9wxZ0Gxjp7T58yqxsmqHB7E9DFhvxRneUXNzqVyeJitbw/viewform?usp=pp_url&entry.98158052=Trivia+Crawler",
          icon: "list-circle-outline",
          title: "Playtest Form"
        }
      ]
    },
    {
      key:"new-america",
      image: "games/new-america/banner-square.jpg",
      title: "New America",
      releaseDate: new Date("2026-01-01"),
      description: "First-person offense and third-party real time strategy game based on Sega's 1990's first million player multiplayer game",
      link: "/games/new-america/",
      images:[],
      projectManagerKey: "mike-wallace",
      resourceLinks: [
        {
          url: "https://drive.google.com/drive/folders/1hwBM3k_eq2MaB7hfMw8HWpmVf17vk1Jb",
          icon: "logo-google",
          title: "Shared Drive"
        },
        {
          url: "https://orcwood.atlassian.net/jira/core/projects/NA/board",
          icon: "bar-chart-outline",
          title: "Jira Board"
        },
        {
          url: "https://docs.google.com/forms/d/e/1FAIpQLSd8w9wxZ0Gxjp7T58yqxsmqHB7E9DFhvxRneUXNzqVyeJitbw/viewform?usp=pp_url&entry.98158052=New+America",
          icon: "list-circle-outline",
          title: "Playtest Form"
        }
      ]
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
      projectManagerKey: "mike-wallace",
      resourceLinks: [
        {
          url: "https://drive.google.com/drive/folders/19f_2kUfPJ_f8lqVqfLJgeTArwpvE1IEl",
          icon: "logo-google",
          title: "Shared Drive"
        },
        {
          url: "https://orcwood.atlassian.net/jira/core/projects/DU/board",
          icon: "bar-chart-outline",
          title: "Jira Board"
        },
        {
          url: "https://docs.google.com/forms/d/e/1FAIpQLSd8w9wxZ0Gxjp7T58yqxsmqHB7E9DFhvxRneUXNzqVyeJitbw/viewform?usp=pp_url&entry.98158052=Downside+Up",
          icon: "list-circle-outline",
          title: "Playtest Form"
        }
      ]
    },
    {
      key:"death-sentence",
      image: "games/death-sentence/banner-square.jpg",
      title: "Death Sentence",
      releaseDate: new Date("2025-07-01"),
      description: "Death Sentence is a thrilling co-op first-person objective focused extraction game",
      link: "/games/death-sentence/",
      images:[],
      projectManagerKey: "allen-clawson",
      resourceLinks: [
        {
          url: "https://drive.google.com/drive/folders/1yqUmUFYlCH03HrSfFOLBg-cCRFI84hPw",
          icon: "logo-google",
          title: "Shared Drive"
        },
        {
          url: "https://orcwood.atlassian.net/jira/software/projects/DS/boards/1",
          icon: "bar-chart-outline",
          title: "Jira Board"
        },
        {
          url: "https://docs.google.com/forms/d/e/1FAIpQLSd8w9wxZ0Gxjp7T58yqxsmqHB7E9DFhvxRneUXNzqVyeJitbw/viewform?usp=pp_url&entry.98158052=Death+Sentence",
          icon: "list-circle-outline",
          title: "Playtest Form"
        }
      ]
    },
    {
      key:"jurassic-hats",
      image: "games/jurassic-hats/marketing/jh_icon_512x512.png",
      title: "Jurassic Hats",
      releaseDate: new Date("2023-07-01"),
      description: "Explore the lost universe of Jurassic Hats.  Find diamonds and stars to unlock wands, hats, and even dinosaurs...",
      link: "/games/jurassic-hats/",
      images:[],
      projectManagerKey: "ross-bryson",
      resourceLinks: [
        {
          url: "https://drive.google.com/drive/folders/13FulS6tiIzlVpZj4SUc1cvbeJbazXsZA",
          icon: "logo-google",
          title: "Shared Drive"
        },
        {
          url: "https://orcwood.atlassian.net/jira/software/projects/JHAT/boards/3",
          icon: "bar-chart-outline",
          title: "Jira Board"
        },
        {
          url: "https://docs.google.com/forms/d/e/1FAIpQLSd8w9wxZ0Gxjp7T58yqxsmqHB7E9DFhvxRneUXNzqVyeJitbw/viewform?usp=pp_url&entry.98158052=Jurassic+Hats",
          icon: "list-circle-outline",
          title: "Playtest Form"
        }
      ]
    },
    {
      key:"cabin-escape",
      image: "games/escape-cabin/banner-square.jpg",
      title: "Cabin Escape",
      releaseDate: new Date("2024-10-29"),
      description: "You wake up to find yourself trapped in an alpine cabin with no clear means of escape. You've lost your memory, but it seems you anticipated that this might happen.  Follow the clues to escape and unlock the mystery within.",
      link: "/games/cabin-escape/",
      images:[],
      projectManagerKey: "jenny-wolfer",
      resourceLinks: [
        {
          url: "https://drive.google.com/drive/folders/13rDyl6M1uh9momUFXDHGCYDGm8SOg1rw",
          icon: "logo-google",
          title: "Shared Drive"
        },
        {
          url: "https://orcwood.atlassian.net/jira/software/projects/TEC/boards/2",
          icon: "bar-chart-outline",
          title: "Jira Board"
        },
        {
          url: "https://docs.google.com/forms/d/e/1FAIpQLSd8w9wxZ0Gxjp7T58yqxsmqHB7E9DFhvxRneUXNzqVyeJitbw/viewform?usp=pp_url&entry.98158052=Cabin+Escape",
          icon: "list-circle-outline",
          title: "Playtest Form"
        }
      ],
      nightlyBuilds: [
        {
          dateTime: new Date("2024-08-27"),
          url: "https://storage.googleapis.com/escape-cabin-nightly-builds/2024-08-27%20Nightly%20Build.zip",
          size: "793.6 MB"
        }
      ],
      html5Url:"https://www.youtube.com/embed/EdLMsgaQCH8?si=WkzWEepOQT6Jnmn1",
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
    projectManagerKey: "jenny-wolfer",
    resourceLinks: [
      {
        url: "https://drive.google.com/drive/folders/1eF_ac6fHmYRr5o-hR0gAKv_P57-JeyQI",
        icon: "logo-google",
        title: "Shared Drive"
      },
      {
        url: "https://orcwood.atlassian.net/jira/software/projects/HL/boards/5",
        icon: "bar-chart-outline",
        title: "Jira Board"
      }
    ]
  },
  {
    key:"second-wind",
    image: "bg-second-wind.png",
    title: "Second Wind",
    releaseDate: new Date("2020-02-01"),
    description: "Solve the mystery of the VCR.  Find the buttons, and rewind time in this 80's themed adventure game.",
    link: "/games/second-wind/",
    projectManagerKey: "jenny-wolfer"
  },
  {
    key:"many-waterfalls",
    image: "2019-11-05.png",
    title: "Many Waterfalls",
    description: "Explore and photograph the many water falls in this adventure game.",
    projectManagerKey: "jenny-wolfer"
  },
  {
    key:"tea-island",
    image: "tavern.jpg",
    title: "Tea Island",
    description: "Industry vs nature, this RPG lets you decide the fate of the land.",
    projectManagerKey: "ross-bryson"
  }];

  getGames():Game[]{
    return this.games;
  }
}

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