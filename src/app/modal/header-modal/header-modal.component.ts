import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.scss']
})
export class HeaderModalComponent {

  menuItem = [
    {"id":"01", "name": "Home", "class": "animate__animated animate__backInLeft animate__faster color-primary"},
    {"id":"02", "name": "About us", "class": "animate__animated animate__backInLeft animate__faster color-secondary"},
    {"id":"03", "name": "Contact us", "class": "animate__animated animate__backInLeft color-white"},
  ]

  constructor(
    private ActiveModal : NgbActiveModal,
    private router: Router,
  ){
  }

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

    this.dismiss()

  }

  dismiss(){
    this.ActiveModal.close();
  }

}
