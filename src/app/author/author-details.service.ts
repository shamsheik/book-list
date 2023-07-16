import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthorDetailsService {
  readonly SERVICE_URL : string = 'https://s3.amazonaws.com/api-fun/books.json';
  constructor(private http: HttpClient) { }
  // Author Details
  getAuthorDetails():Observable<any>{
    return this.http.get<any>(this.SERVICE_URL);
  }
}
