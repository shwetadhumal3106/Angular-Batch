import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private postUrl = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.postUrl);
  }

  //call the api return data
  // list() {
  //   return this.httpClinet.get(`${this.apiUrl}`);
  // }

}
