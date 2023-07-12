import { Component, OnInit } from '@angular/core';
import { PostAssignmentService } from '../servise/post-assignment.service';

@Component({
  selector: 'app-post-assignment',
  templateUrl: './post-assignment.component.html',
  styleUrls: ['./post-assignment.component.css']
})
export class PostAssignmentComponent implements OnInit {

  
  posts: any[];

  constructor(private postassignmentService:PostAssignmentService) 
  { 
    this.posts = [];

  }

  ngOnInit() {

    this.fetchData();
  }

  fetchData() {
    this.postassignmentService.GetAllPosts().subscribe((response: any[]) => {
      this.posts = response;
      this.logData();
    });
  }

  logData() {
    console.table(this.posts);
  }

  
}



