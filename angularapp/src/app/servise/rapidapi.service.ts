import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {
  

   rapidApiUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US';
   crickBuzUrl= 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent';

   headers = new HttpHeaders({
    'X-RapidAPI-Key': 'c2b090dad2mshb508a79e34cddcdp181128jsn4d12dd32b177',
    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
   })

   
   constructor(private httpClient: HttpClient) { }

  getDataYahooFinance() : Observable<any>  {
    let params = new HttpParams();
    params = params.append('q', 'tesla');
    params = params.append('region', 'US');
    return this.httpClient.get(this.rapidApiUrl, { headers: this.headers, params: params} )  }


    getDataCrickBuzz(): Observable<any> {
        let header =new HttpHeaders({
      'X-RapidAPI-Key': 'e4aca18c54mshf3b8957be1d22f9p1d6488jsned71c2f8d4a7',
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
     })
     return this.httpClient.get(this.crickBuzUrl, {headers: header});
    }

    cricketUrl='https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/41881'
  
  
   header=new HttpHeaders({
    'X-RapidAPI-Key': 'a356432fb5msh8cc581faab668ccp1f30e1jsn9f9c0cea3104',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    })
 
  get() : Observable<any>  {
    return this.httpClient.get(this.cricketUrl, { headers: this.header} )
  }
}

