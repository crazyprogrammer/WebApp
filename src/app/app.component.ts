import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild('f') signup: NgForm;
user = {
  UserName: '',
  Email : '',
  Contact : ''
};

submitted = false;
  
onSubmit(){
   this.submitted = true;
   this.user.UserName = this.signup.value.Name;
   this.user.Email = this.signup.value.email;
   this.user.Contact = this.signup.value.cell;
  }
}
