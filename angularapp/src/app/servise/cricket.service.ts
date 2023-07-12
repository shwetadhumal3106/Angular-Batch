import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CricketService {
 
  private apiUrl = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'e4aca18c54mshf3b8957be1d22f9p1d6488jsned71c2f8d4a7',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  });
  get: any;

  constructor(private http: HttpClient) { }

 getInfo(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.headers });
  } 

}