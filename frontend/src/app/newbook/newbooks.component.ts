import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-newbooks',
  templateUrl: './newbooks.component.html',
  styleUrls: ['./newbooks.component.css']
})
export class NewbooksComponent implements OnInit {


  constructor(private bookService:BookserviceService,private router: Router) { }
  bookDetail= {
    bookid:'',
    title:'',
    author:'',
    genre:'',
    imageUrl:''
  }
// bookDetail: IBook;
  ngOnInit(): void {
  }
  AddBook()
  {    
    this.bookService.newBook(this.bookDetail);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/books']);
  }
}
