import { Component } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExampleComponent } from 'src/app/layout/example/example.component';
import { CommonserviceService } from 'src/app/service/commonservice.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  details: any;
 modalData:any;
 urlTitle:any;



  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private serviceProvider:CommonserviceService
  ) {

    this.getUrl()

    this.activatedRoute.queryParams.subscribe(params => {
      let details = this.router.getCurrentNavigation()?.extras.state?.['details']

          if(details== undefined){
            this.getTypes()
          }
          else{
            this.details = details

          }


    })
  }


  presentModal(item:any) {
      this.modalData = this.modalService.open(ExampleComponent, {
        size: 'lg' ,
       animation: false,
     });
     this.modalData.componentInstance.example = item

   


    }



    async getTypes(){
      const url = './assets/json/types.json'
      this.serviceProvider.getWebService(url).subscribe({
        next: async (response: any) => {
          this.details = response
          this.details =  _.find(response, ['title', this.urlTitle]);
            console.log(this.details)
        }
        })
    }

  getUrl(){

    const fullUrl = window.location.href;
    console.log(fullUrl);
    // Split the URL using the '/' character to get individual parts
    const urlParts = fullUrl.split('/');
    // Get the last part of the URL, which contains the encoded text
    const encodedText = urlParts[urlParts.length - 1];
    // Decode the encoded text to get the actual text

    const decodedText = decodeURIComponent(encodedText);
    this.urlTitle = decodedText.replace(/-/g, ' ');
  }


  ngOnInit(): void {



  }

}
