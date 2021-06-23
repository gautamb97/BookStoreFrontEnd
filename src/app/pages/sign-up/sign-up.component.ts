import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from './sign-up.model';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private service: UserService,
              private snackBar: MatSnackBar) { }

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

  submit() {
    this.service.registerUser(this.user).subscribe(response => {
      console.log(response)
      this.data = response
      this.message = this.data.message
      this.snackBar.open(this.message, '', { duration: 2000 })
    }, error => {
      console.log(error)
      this.error = error
      this.message = this.error.error.message
      this.snackBar.open(this.message, '', { duration: 2000 })
    })
  }
}
