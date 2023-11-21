import { Component } from '@angular/core';
import testimonials from '../../../assets/json/testimonials.json'

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

  testimonials: any = testimonials;


}
