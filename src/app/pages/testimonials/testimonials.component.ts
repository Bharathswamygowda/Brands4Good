import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonserviceService } from 'src/app/service/commonservice.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

  testimonials: any;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoHeight: true,
    navSpeed: 700,
    navText: ['<img src="./assets/images/left-arrow.png">', '<img src="./assets/images/right-arrow.png">'],
    // navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }




  constructor(
    private serviceProvider: CommonserviceService
  ) {



  }








  async getTestimonials(){
    const url = './assets/json/testimonials.json'
    this.serviceProvider.getWebService(url).subscribe({
      next: async (response: any) => {
        this.testimonials = response
      }
      })
  }


  async ngOnInit() {
    await this.getTestimonials()
    }


}
