import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/service/commonservice.service';
import testimonials from '../../../assets/json/testimonials.json'

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

  testimonials: any;

  constructor(
    private serviceProvider: CommonserviceService
  ) {}


  async getTestimonials(){
    const url = '../../../assets/json/testimonials.json'
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
