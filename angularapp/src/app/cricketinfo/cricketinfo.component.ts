// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-cricketinfo',
//   templateUrl: './cricketinfo.component.html',
//   styleUrls: ['./cricketinfo.component.css']
// })
// export class CricketinfoComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
// import { Component, OnInit } from '@angular/core';
// import { CricketinfoService } from '../servise/cricketinfo.service';


// @Component({
//   selector: 'app-cricketinfo',
//   templateUrl: './cricketinfo.component.html',
//   styleUrls: ['./cricketinfo.component.css']
// })
// export class CricketinfoComponent implements OnInit {
//   [x: string]: any;
//   matchInfo: any;
//   venue: any;
//   team1: any;
//   team2: any;

//   constructor(private service: CricketinfoService) { }

//   ngOnInit() {
//     this.getdataa();
//   }

//   getdataa() {
//     this.CricketinfoService.get().subscribe(res => {
//       console.log('This is the cricket info', res);
//       this.venue = res.venueInfo;
//       this.matchInfo = res.matchInfo;
//       this.team1 = this.matchInfo.team1;
//       this.team2 = this.matchInfo.team2;

//       // Logging data in table format
//       console.table([
//         { Venue: this.venue },
//         { MatchInfo: this.matchInfo },
//         { Team1: this.team1 },
//         { Team2: this.team2 }
//       ]);
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../servise/rapidapi.service';


@Component({
  selector: 'app-cricketinfo',
  templateUrl: './cricketinfo.component.html',
  styleUrls: ['./cricketinfo.component.css']
})
export class CricketinfoComponent  implements OnInit {
  
  
  matchInfo
  counter=1
  venue
  team1
  team2
  constructor(private rapidService:RapidapiService) { }
  

ngOnInit() {
 
  this.getdata()
 }

getdata(){
 this.rapidService.get().subscribe(res=>{
   console.log('this is the cricket info',res);
   // this.matchinfo=res.matchInfo.series[0]
   // this.matchInfo=res.matchInfo
   this.venue = res.venueInfo;
   this.matchInfo = res.matchInfo;
   this.team1 = this.matchInfo.team1;
   this.team2 = this.matchInfo.team2;
   console.log("Team 1", this.team1);
   console.log("Team 2", this.team2);


 })
}
}