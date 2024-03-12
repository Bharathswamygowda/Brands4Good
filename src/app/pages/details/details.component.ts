import { Component } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExampleComponent } from 'src/app/layout/example/example.component';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  details: any;
 modalData:any;



  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.details = this.router.getCurrentNavigation()?.extras.state?.['details']
      console.log(this.details)
    })
  }


  presentModal(item:any) {
      this.modalData = this.modalService.open(ExampleComponent, {
        size: 'lg' ,
       animation: false,
     });
     this.modalData.componentInstance.example = item

   


    }



  ngOnInit(): void {



  }

}
