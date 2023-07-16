import { Component, OnInit } from '@angular/core';
import { AuthorDetailsService } from '../author-details.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})

export class AuthorDetailsComponent implements OnInit {
  authorDetails:any;
  books: any;
  isSortedbyTitle : boolean = false;
  isSortedbyDate : boolean = false;
  dataSource:any;
  constructor(private authorService : AuthorDetailsService) { }
  ngOnInit(): void {
    this.getauthor();
  }
  // subscribing to Author details service and getting the data
  getauthor(){
    this.authorService.getAuthorDetails().subscribe({next:(response)=>{
      this.authorDetails = response.data;
      this.books = response.data.books;
      this.dataSource = this.books;
      console.log(this.authorDetails);
    },error:() =>{
      console.error();
    }});
  }
// IMPLEMENTATION OF SORTING IN TWO WAYS: EITHER BY TITLE OR DATE
sortDatabyTitle():void{
  this.isSortedbyTitle = !this.isSortedbyTitle;
  if(this.isSortedbyTitle){
    this.books.sort((a:any, b:any) => a.title.localeCompare(b.title));
  }
  else{
    this.books.sort((a:any, b:any) => b.title.localeCompare(a.title));
  }
    
  }
sortDatabyDate():void{
  this.isSortedbyDate = !this.isSortedbyDate;
  if(this.isSortedbyDate){
    this.books.sort((a:any, b:any) => new Date(a.PublishDate).getTime() - new Date(b.PublishDate).getTime());

  }else{
    this.books.sort((a:any, b:any) => new Date(b.PublishDate).getTime() - new Date(a.PublishDate).getTime());

  }
}
// Deleting Book from browser
deleteBook(details: any): void {
  const index = this.books.indexOf(details);
  if (index !== -1) {
    this.books.splice(index, 1);
  }
}
}
