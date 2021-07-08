import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import {  ActivatedRoute,Router} from "@angular/router";
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent implements OnInit {

  pageTitle:string='Books';
  imageWidth:number=100;
  imageMargin:number=6;
  showImage:boolean=false;
 
  books=[{
  bookid:'',
  title:'',
  author:'',
  genre:'',
  imageUrl:''
  }]
  toggleImage(): void{
   this.showImage = !this.showImage;
 }
  constructor(private router:Router,private bookService: BookserviceService,public _auth:AuthService) { }

  ngOnInit(): void {

    this.bookService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));

  })
  }
 
  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['/updatebook']);

  }
  deleteBook(book:any)
  {
    this.bookService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(b => b !== book);
      })
  }

}

