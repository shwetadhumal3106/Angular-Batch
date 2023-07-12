import { Component, OnInit } from '@angular/core';

import { Post } from '../model/post';
import { PostService } from '../servise/post.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  arrPosts: Post[] = [];
  // DI 
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.GetAllPosts().subscribe(res => {
      console.log('from post list', res);
      this.arrPosts = res;
    })
  }

}