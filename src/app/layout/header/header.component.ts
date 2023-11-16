import { Component } from '@angular/core';
import { HeaderModalComponent } from 'src/app/modal/header-modal/header-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  modalData: any;

  constructor(
    private modalService: NgbModal,
  ){ }




  presentModal() {
    this.modalData = this.modalService.open(HeaderModalComponent, {
      fullscreen: true,
      animation: true,
      scrollable: true
    });
  }

}
