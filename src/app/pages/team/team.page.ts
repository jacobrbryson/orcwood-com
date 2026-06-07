import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'page-team',
  templateUrl: './team.page.html',
})
export class TeamPage implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.update({
      title: 'Our Team',
      description:
        'Meet the Orcwood Games team — the developers, artists, designers, and musicians who volunteer their spare time and unique skills to build games together.',
      path: '/team',
    });
  }
}
