import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseUrl = 'https://angb6crud-b1d23-default-rtdb.firebaseio.com/';
  
  constructor(private httpClient: HttpClient) { }

  createPost() : Observable<any> {
    let postData = {
      title: 'This is angular 8 crud with firebase',
      content: 'This is test firebase'
    }
   return this.httpClient.post(this.firebaseUrl + 'posts.json', postData);

  }

  getPostData() : Observable<any> {
   return this.httpClient.get(this.firebaseUrl+ 'posts.json');
  }
}