import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://jsonplaceholder.typicode.com/users";
  constructor(private httpClient: HttpClient) { }

  GetUsers() 
  {
    // this method to send an HTTP Request.
    return this.httpClient.get(this.url);
  }
}