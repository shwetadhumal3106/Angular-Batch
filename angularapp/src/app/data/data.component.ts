import { Component, OnInit } from '@angular/core';
import { DataService } from '../servise/data.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

 //posts: any [];
 posts:any =[];

  constructor(private dataService: DataService) {
    this.posts = [];
  }

  ngOnInit() {
    this.fetchData();
  }

  // fetchData() {
  //   this.dataService.getPosts().subscribe((response: any[]) => {
  //     this.posts = response;  // in response value getting store in array
  //     this.logData();
  //   });
  // }
  
  fetchData(){
    this.dataService.getPosts().subscribe((res)=>{
      this.posts=res;
      console.log('get post list ',this.posts);
    },error=>{
      console.log('error occcurd');
    })
  }

// this curd method is use to show data on browser
// getTodos() {
//   this.todoService.list().subscribe((res)=>{
//     this.todoList = res;
//     console.log('get todos list', this.todoList);
//   }, error => {
//     console.log('error occured');
//   })
// }

  // logData() {
  //   console.table(this.posts);
  // }
}
