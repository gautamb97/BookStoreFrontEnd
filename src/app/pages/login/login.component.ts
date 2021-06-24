import { Component, OnInit } from '@angular/core';
import { Login } from './login.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,
              private service: UserService) { }

  ngOnInit(): void {
  }

  user = new Login();
  message: any
  data: any
  error: any
  token: any
  userData: any

  submit() {
    this.service.login(this.user).subscribe(response => {
      console.log(response)
      this.data = response
      this.message = this.data.message
      this.token = this.data.token
      localStorage.setItem('token', this.token)
      this.snackBar.open(this.message, '', { duration: 2000 });
    }, error => {
      console.log(error)
      this.error = error
      this.message = this.error.error.error
      this.snackBar.open(this.message, '', { duration: 2000 })
    })
  }
}
