import { Injectable } from '@angular/core';
import { HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  title: any;
  constructor(private http: HttpClient) { }

  getSearchList() : Observable<object>{
    return this.http.get('https://www.googleapis.com/books/v1/volumes',{
      params:{
        q: this.title
      },
    });
  }
  setParram(name){
    this.title=name;
  }
}
