import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  private apiUrl = 'https://en.wikipedia.org/w/api.php';

  constructor(private http: HttpClient) {}

  searchArticles(searchTerm: string): Observable<any> {
    const params = new HttpParams()
      .set('action', 'query')
      .set('format', 'json')
      .set('list', 'search')
      .set('utf8', '1')
      .set('srsearch', searchTerm)
      .set('origin', '*');

    return this.http.get(this.apiUrl, { params });
  }
}
