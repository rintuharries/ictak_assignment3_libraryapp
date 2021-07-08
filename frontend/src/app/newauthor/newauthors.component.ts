import { Component, OnInit } from '@angular/core';
import { AuthorserviceService } from '../authorservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-newauthors',
  templateUrl: './newauthors.component.html',
  styleUrls: ['./newauthors.component.css']
})
export class NewauthorsComponent implements OnInit {

  constructor(private authorService: AuthorserviceService,private router: Router) { }
  authorDetail= {
    authorid:'',
    authorname:'',
    work:'',
    published:'',
    imageUrl:''
  }
// authorDetail: IAuthor;

  ngOnInit(): void {
  }
  AddAuthor()
  {    
    this.authorService.newAuthor(this.authorDetail);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/authors']);
  }

}
