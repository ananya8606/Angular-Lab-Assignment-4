import { Component } from '@angular/core';
import { BookService } from './book.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[BookService]
})
export class AppComponent {
  title = 'LabAssignmentAngular4';
  searchText:string='';
  searchText1:string='';
  searchText2:string='';
  searchText3:string='';
  books: any[];
  showid:boolean=false;
  showtitle:boolean=false;
  showauthor:boolean=false;
  showyear:boolean=false;
  getid(){
    this.showid=true;
    this.showtitle=false;
    this.showauthor=false;
    this.showyear=false;
  }
  gettitle(){
    this.showid=false;
    this.showtitle=true;
    this.showauthor=false;
    this.showyear=false;
  }
  getauthor(){
    this.showid=false;
    this.showtitle=false;
    this.showauthor=true;
    this.showyear=false;
  }
  getyear(){
    this.showid=false;
    this.showtitle=false;
    this.showauthor=false;
    this.showyear=true;
  }
  constructor(private _studentService: BookService) {
      this.books = this._studentService.getBooks();
  } 

}
