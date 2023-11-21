import { Component } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router, NavigationStart } from '@angular/router';

import types from '../../../assets/json/types.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  types: any = types;



  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,

  ) {}


  async navigate(item:any){

    const navigationExtras: NavigationExtras = {
      relativeTo: this.activatedRoute,
      state: {
        details: item,
      }
    };
    this.router.navigate(['/details'], navigationExtras);
  }



  ngOnInit(): void {


  }


}
