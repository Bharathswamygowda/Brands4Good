import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { CommonserviceService } from 'src/app/service/commonservice.service';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('typewriter') typewriterElement!: ElementRef;

  types: any;



  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private serviceProvider: CommonserviceService
  ) {}


  async getTypes(){
    const url = './assets/json/types.json'
    this.serviceProvider.getWebService(url).subscribe({
      next: async (response: any) => {
        this.types = response
      }
      })
  }


  async navigate(item:any){

    const navigationExtras: NavigationExtras = {
      relativeTo: this.activatedRoute,
      state: {
        details: item,
      }
    };
    const sanitizedTitle = item.title.replace(/\s+/g, '-');

    this.router.navigate(['/' + sanitizedTitle], navigationExtras);
  }






 async ngOnInit() {
  await this.getTypes()

  const options = {
    strings: ['with meaning', 'with Imagination', 'that Inspire', 'for people', 'for Good'],
    typeSpeed: 100,
    backSpeed: 0,
    showCursor: false,
    cursorChar: '|',
    fadeOut: true,
    loop: true
};
   
const typed = new Typed('.typed-element', options);

}



}
