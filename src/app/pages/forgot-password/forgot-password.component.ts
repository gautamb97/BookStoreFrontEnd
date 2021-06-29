import { Component, OnInit } from '@angular/core';
import { User } from './forgot-password.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private service: UserService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  user = new User()
  message: any
  data: any
  error: any
  
  /**
   * @description : It takes the email from user and send an email to the particular user
   * @method      : forgot password from UserService
  */
  submit() {
    this.service.forgotPassword(this.user).subscribe(response => {
      console.log(response)
      this.data = response
      this.message = this.data.message
      this.snackBar.open(this.message, '', { duration: 2000 })
    }, error => {
      console.log(error)
      this.error = error
      this.message = this.error.error.error
      this.snackBar.open(this.message, '', { duration: 2000 })
    })
  }

}
