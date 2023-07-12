import { Component, OnInit } from '@angular/core';
import { PostService } from '../servise/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  

  constructor(private postService:PostService) { }

  ngOnInit() {
    //get all posts on browser consle and using *ngfor log on browser
    this.postService.GetAllPosts().subscribe(res =>{
      console.log('get All post',res);
    })
 
    //get post by id browser consle and using *ngfor log on browser
    this.postService.GetPostById(98).subscribe(res =>{
      console.log('get All post',res);
    })

    //update post by id
    this.updatePost();

    //to call the delet method
    this.deletePostById();

    //to call create post method
    this.createPost();
  }

  //update post by this method is write using object literlas create the object because we dont have object
  updatePost() {  
    let data = {
      id: new Date().getTime(),//random id
      title: 'This is updated title'
    }

    this.postService.UpdatePostById(1, data).subscribe(res => {
      console.log('data updated successfully', res);
    })

    
  }


  deletePostById() {
    this.postService.DeletePostById(1).subscribe(res => {
      console.log('post deleted successfully', res);
    })
  }

  createPost() {
    let body = {
      id: new Date().getTime(),
      title: 'This is new post',
      body: 'This is the test post method of httpclient'
    }
    this.postService.CreatePost(body).subscribe(res => {
      console.log('Poste created successfully', res);
    })
  }
}
