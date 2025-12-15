import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'home-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})

export class BannerComponent implements OnInit {
  private readonly winterBannerEndDate = new Date(2026, 2, 21); // March 21, 2026 (month is 0-indexed)
  showWinterBanner = false;
  highScores:any=[{
    gamerTag: "Oxeblood",
    time: "3:15.456"
  },{
    gamerTag: "Herikane",
    time: "3:16.116"
  },{
    gamerTag: "Foxx",
    time: "3:16.722"
  },{
    gamerTag: "Erron Black",
    time: "3:17.133"
  },{
    gamerTag: "Herikane",
    time: "3:19.456"
  },{
    gamerTag: "Milly",
    time: "3:19.499"
  },{
    gamerTag: "MASS",
    time: "3:20.111"
  },{
    gamerTag: "Vixen",
    time: "3:55.882"
  },{
    gamerTag: "NICE",
    time: "4:20.000"
  },{
    gamerTag: "TREX",
    time: "4:45.333"
  }];
  constructor(public utilityService: UtilityService) { }

  ngOnInit() {
    this.showWinterBanner = new Date() < this.winterBannerEndDate;
  }
  
}
