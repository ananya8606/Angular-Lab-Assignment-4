import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks(): any[] {
    return [
    {
      "id": "1",
      "title": "Android for Expert",
      "year": "1996",
      "author": "George R. R"
    },
    {
      "id": "2",
      "title": "Complete Reference",
      "year": "1998",
      "author": "George P. R. Martin"
    },
    {
      "id": "3",
      "title": "BackBone JS",
      "year": "2000",
      "author": "Kalvin R.V"
    },
    {
      "id": "4",
      "title": "Knock Out JS",
      "year": "2005",
      "author": "J.J Markin"
    },
    {
      "id": "5",
      "title": "Pointer in C",
      "year": "2011",
      "author": "Y P Kanitkar"
    },
    {
      "id": "6",
      "title": "Big Data",
      "year": "2011",
      "author": "Pearson D A"
    },
    {
      "id": "7",
      "title": "A Dream of Spring",
      "year": "2012",
      "author": "George R. R. Martin"
    },
    {
      "id": "8",
      "title": "The Philosopher's Stone",
      "year": "1997",
      "author": "J. K. Rowling"
    },
    {
      "id": "9",
      "title": "The Chamber of Secrets",
      "year": "1998",
      "author": "J. K. Rowling"
    },
    {
      "id": "10",
      "title": "The Prisoner of Azkaban",
      "year": "1999",
      "author": "J. K. Rowling"
    }
    
  ];
}

  constructor() { }
}
