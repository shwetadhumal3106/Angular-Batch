// import { Component, OnInit } from '@angular/core';
// import { from, interval, of, timer } from 'rxjs';
// import { filter, map, mergeMap, takeLast, takeUntil } from 'rxjs/operators';
// import { PostService } from '../servise/post.service';

// @Component({
//   selector: 'app-rxjs',
//   templateUrl: './rxjs.component.html',
//   styleUrls: ['./rxjs.component.css']
// })
// export class RxjsComponent implements OnInit {

//   constructor(private postService:PostService) { }

  

//     ngOnInit() {

 

//       const source = from([1,2,3,4,5]);
  
   
  
//       // filter out non-even numbers 
  
   
  
//       const res = source.pipe(filter(num => num % 2 != 0));
  
   
  
//       res.subscribe(res => {
  
//         console.log('after filter', res);
  
//       })
  
   
  
//       let obs1 = of(1,2,3);
  
//       let obs2 = of(4,5,6);
  
     
  
//        obs1.pipe(
  
//         mergeMap(value1 => obs2.pipe(map(value2 => value1 +'' + value2)))
  
//        ).subscribe(res => {
  
//         console.log(res);

//         this.postService.requestDataFromMultipleSorces().subscribe(res=>{
//           console.log('forkjion', res);
//         })
  

//         // take 


//     // const obs = interval(1000);

  
//     //  obs.pipe(

//     //   take(5)

//     //  ).subscribe(res => {

//     //   console.log('res interval take 5', res)

//     //  })

 

//      // take last 

 

//     let courses = ['Html', 'Angular', 'Javascript', 'Typescript'];

 

//     const newobs = from(courses);

//     newobs.pipe(

//       takeLast(2)

//     ).subscribe(res => {

//       console.log('take last 2', res);

//     });

 

//     // take until 

//     const obsTakeuntils = interval(1000);

 

//     let condition = timer(9000);

 

//     obsTakeuntils.pipe(

//       takeUntil(condition)

//     ).subscribe(res => {

//       console.log('take until', res);

//     })
//        })
  
   
  
//     }
  
  
//   }

