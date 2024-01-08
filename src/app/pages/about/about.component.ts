import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/service/commonservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  timeline:any;
  brands:any;
  constructor(
    private serviceProvider: CommonserviceService
  ) {}

  getTimeline(){
    const url = '../../../assets/json/timeline.json'
    this.serviceProvider.getWebService(url).subscribe({
      next: async (response: any) => {
        this.timeline = response
      }
      })
  }

  getBrands(){
    const url = '../../../assets/json/brands.json'
    this.serviceProvider.getWebService(url).subscribe({
      next: async (response: any) => {
        this.brands = response
      }
      })
  }


  async ngOnInit() {
    await this.getTimeline()
    await this.getBrands()
    }



}
