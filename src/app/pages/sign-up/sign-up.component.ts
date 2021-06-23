import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from './sign-up.model';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value'
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  firstName = new FormControl('', Validators.required);
  getError() {
    return (this.firstName.hasError('required')) ? 'You must enter a value' : 'Must conatin three letters and only alphabets allowed';
  }

  lastName = new FormControl('', Validators.required);
  errorMessage() {
    return (this.lastName.hasError('required')) ? 'You must enter a value' : 'Must conatin three letters and only alphabets allowed';
  }

  password = new FormControl('', Validators.required);
  passwordErrorMessage() {
    return (this.password.hasError('required')) ? 'You must enter a value' : 'Must have One Capital, one small latter and one number and a symbol';
  }


  user = new User();
  message: any
  data: any
  error: any

}
