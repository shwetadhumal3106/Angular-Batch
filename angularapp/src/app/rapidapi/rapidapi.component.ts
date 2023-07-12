import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../servise/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {
  matchInfo: any[]=[];
  matchInfoNew:any[]=[];


  // Inject the rapid api service
  constructor(private rapidApiService: RapidapiService) { }

  ngOnInit() {
    // this.rapidApiService.getDataYahooFinance().subscribe( res => {
    //   console.log('getting data from rapid API ', res);
    // })

    this.rapidApiService.getDataCrickBuzz().subscribe(res => {
      
      for(let val of res.typeMatches)
      {
        
        for(let match of val.seriesMatches) {
         
          if(match.seriesAdWrapper != undefined) {
            
            for(let matchinfo of match.seriesAdWrapper.matches) 
            {
              console.log('from crickbuzz', matchinfo.matchInfo);
              this.matchInfo = matchinfo.matchInfo;
            }
          }
        }
      }
    })
  }
  }
  


