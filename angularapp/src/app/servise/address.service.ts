import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private baseUrl = 'http://awsmaster.mahamining.com/master';

  constructor(private http: HttpClient) { }

  // getStates(): Observable<any> {
  //   const url = `${this.baseUrl}/states/GetState`;
  //   return this.http.get(url);
  // }

  getDivisionsByStateId(id: string): Observable<any> {
    const url = `${this.baseUrl}/divisions/${id}`;
    return this.http.get(url);
  }

  getDistrictsByDivisionId(stateId: string, divisionId: string): Observable<any> {
    const url = `${this.baseUrl}/districts/GetDistrictByDivisionId?UserId=${stateId}&DivisionId=${divisionId}`;
    return this.http.get(url);
  }

  getTalukasByDistrictId(id: string): Observable<any> {
    const url = `${this.baseUrl}/talukas/GetTalukaByDistrictId/${id}`;
    return this.http.get(url);
  }

  getVillagesByCriteria(id: string): Observable<any> {
    const url = `${this.baseUrl}/villages/GetVillagesByCriteria/${id}`;
    return this.http.get(url);
  }
}
