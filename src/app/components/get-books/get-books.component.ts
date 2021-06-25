import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.scss']
})
export class GetBooksComponent implements OnInit {

  data: any;
  books: any;
  error: any;
  message: any;
  id: any
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.submit()
  }

  /**
   * @description : It fetch all notes which are existing in db
   * @method      : getNotes from UserService
  */
   submit() {
    this.service.getBooks().subscribe(res => {
      this.data = res
      this.books = this.data.data
      this.books = this.books.reverse()
    }, error => {
      console.log(error)
      this.error = error.error.err
      this.message = this.error
    })
  }
}
