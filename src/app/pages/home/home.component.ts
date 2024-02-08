import { Component } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { CommonserviceService } from 'src/app/service/commonservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

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
    this.router.navigate(['/details'], navigationExtras);
  }



 async ngOnInit() {
  await this.getTypes()
  }


}
