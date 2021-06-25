import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ResetPasswordData } from './reset-password.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private service: UserService,
              private snackBar: MatSnackBar,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
  }

  password = new FormControl('', Validators.required);
  passwordErrorMessage() {
    return (this.password.hasError('required')) ? 'You must enter a value' : 'Must have One Capital, one small latter and one number and a symbol';
  }

  resetData = new ResetPasswordData();
  message: any
  data: any
  error: any

  submit() {
    const token = this.router.snapshot.params
    this.service.resetPassword(this.resetData, token).subscribe(response => {
      console.log(response) 
      this.data = response
      this.message = this.data.message
      this.snackBar.open(this.message, '', { duration: 2000 })
    }, error => {
      console.log(error)
      this.error = error.error.err
      this.message = this.error
      this.snackBar.open(this.message, '', { duration: 2000 })
    })
  }
}
