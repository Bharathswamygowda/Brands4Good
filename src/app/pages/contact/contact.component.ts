import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  emailValid = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,25})$/;

  formFileds= {
    name: '',
    surName: '',
    email: '',
    subject: '',
    message: ''
  }

  async sendEmail() {
    emailjs.init('F-FN2UptZh4Ox2bbG')
    
    const parms = {
      Name: this.formFileds.name,
      Surname: this.formFileds.surName,
      Email: this.formFileds.email,
      Subject: this.formFileds.subject,
      Message: this.formFileds.message,
    }

    emailjs.send("service_gr5jns4",  "template_njju4tp", parms).then((result)=>{
      
      this.formFileds= {
              name: '',
              surName: '',
              email: '',
              subject: '',
              message: ''
            }
    })
  }

}
