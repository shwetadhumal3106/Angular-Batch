import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyserviceService {

  private apiKey = 'YOUR_API_KEY'; // Replace with your Giphy API key
  private apiUrl = 'api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { }

  getTrendingGifs(): Observable<any> {
    const url = `${this.apiUrl}/trending?api_key=${this.apiKey}&limit=10`;
    return this.http.get<any>(url);
  }

  searchGifs(query: string): Observable<any> {
    const url = `${this.apiUrl}/search?api_key=${this.apiKey}&q=${query}&limit=10`;
    return this.http.get<any>(url);
  }
}
