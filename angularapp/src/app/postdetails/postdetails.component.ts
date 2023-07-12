import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PostService } from '../servise/post.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
   let id = this.route.snapshot.params['id'];
    this.postService.GetPostById(id).subscribe(res => {
      console.log('data from post details', res)
    })
  }

}