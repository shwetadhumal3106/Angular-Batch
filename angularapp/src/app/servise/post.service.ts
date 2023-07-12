import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 postUrl = 'https://jsonplaceholder.typicode.com/posts/'
  GetAllId: any;
  constructor(private httpClient: HttpClient) { }

  GetAllPosts() : Observable<any>{  //using this log data on browser console
   return this.httpClient.get(this.postUrl);
  }


  //we can pass id hardcoded also
  GetPostById(id: any) : Observable<any> {
    return this.httpClient.get(this.postUrl+ id);
   }

   //update the we can use this method
   UpdatePostById(id: any, body: any) : Observable<any> {
    return this.httpClient.put(this.postUrl + id, body);
   }

   //delet the we can use this method
   DeletePostById(id: any) : Observable<any> {
    return this.httpClient.delete(this.postUrl+ id);
  }

  //create the we can use this method
  CreatePost(body: any) : Observable<any> {
    return this.httpClient.post(this.postUrl, body);
   }
   public requestDataFromMultipleSorces()   {

    let response1 = this.httpClient.get(this.postUrl);

    let response2 = this.httpClient.get('https://jsonplaceholder.typicode.com/users');

    let response3 = this.httpClient.get('https://jsonplaceholder.typicode.com/comments');

 

     forkJoin([response1, response2, response3]).subscribe(res => {

      console.log(res);

     })

 

  }
   
}