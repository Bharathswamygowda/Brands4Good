import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
  ){
  }


  dismiss(){
    this.ActiveModal.close();
  }

}
