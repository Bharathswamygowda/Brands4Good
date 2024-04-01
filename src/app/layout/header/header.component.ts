import { Component } from '@angular/core';
import { HeaderModalComponent } from 'src/app/modal/header-modal/header-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  modalData: any;

  menuItem = [
    {"id":"01", "name": "Home" },
    {"id":"02", "name": "About us"},
    {"id":"02", "name": "Services"},
    {"id":"03", "name": "Contact us"},
  ]

  constructor(
    private modalService: NgbModal,
    private router: Router,

  ){ }


  navigate(item:any){
    console.log(item.id)
    if(item.id === '01'){
      this.router.navigate([''])
    }
    else if(item.id === '02'){
      this.router.navigate(['about'])
    }

    else if(item.id === '03'){
      this.router.navigate(['contact'])
    }

  }




  presentModal() {
    this.modalData = this.modalService.open(HeaderModalComponent, {
      fullscreen: true,
      animation: true,
      scrollable: true
    });
  }

}
