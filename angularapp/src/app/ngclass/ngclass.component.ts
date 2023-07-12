import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import { FirebaseService } from '../servise/firebase.service';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {


  people:any[] = [
    {
      "name": 'Jack',
      "country": 'UK'
    },
    {
      "name": 'Sumit',
      "country": 'USA'
    },
    {
      "name": 'Anup',
      "country": 'HK'
    },
    {
      "name": 'codemind',
      "country": 'UK'
    },
    {
      "name": 'surya',
      "country": 'USA'
    },
    {
      "name": 'Rocky',
      "country": 'HK'
    }
  ]

  constructor(private fbService: FirebaseService) { }

  ngOnInit() {

    this.fbService.getPostData().pipe(
      map(responseData => {
        // empty array 
        const postArray = [];

        // for in loop
        for(const key in responseData) {

          // check key 
          if(responseData.hasOwnProperty(key)) {
            // push the new value into array 
            postArray.push({...responseData[key], id:key})
          }
        }
        return postArray;
      } )
    ).subscribe(res => {
      console.log('after manipulate the data', res);
    })
  }

}
