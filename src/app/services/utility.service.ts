import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor(private router: Router) { }

  goToLink(link:string | undefined){
    if(!link) return;

    this.router.navigate([link]);
  }
}
