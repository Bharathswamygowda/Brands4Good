import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  @Input () example: any;

  constructor(
    private activeModal: NgbActiveModal,
    private sanitizer : DomSanitizer
    ) {
  
  }

  dismiss() {
    this.activeModal.close();
  }

  


  ngOnInit(): void {
    
  }

}
