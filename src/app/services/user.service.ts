import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  registerUser(data: any) {
    return this.httpService.postData(environment.URL + 'userRegistration', data)
  }

  login(data: any) {
    return this.httpService.postData(environment.URL + 'userLogin', data)
  }

  forgotPassword(data: any) {
    return this.httpService.postData(environment.URL + 'forgotPassword', data)
  }

  resetPassword(data: any, token: any) {
    return this.httpService.postDataUsingToken(environment.URL + 'resetPassword', data, token)
  }
}
