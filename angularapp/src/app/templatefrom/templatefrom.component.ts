import { Component, OnInit } from '@angular/core';
import { NgForm, } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-templatefrom',
  templateUrl: './templatefrom.component.html',
  styleUrls: ['./templatefrom.component.css']
})
export class TemplatefromComponent implements OnInit {

  isSubmitted:boolean=false;
  user:User;
  genders=[
    {
      id:'1',value: 'Male'
    },
    {
      id:'2',value:'Female'
    }
  ]
 
  defaultGenderValue='Male'
  username="Shweta"
  // user: any;

  
  courseArr : string [] = [
    'Angular', 'HMTL', 'JavaScript'
  ]
  myForm: any;
  
  ngOnInit() {
  }

  OnSubmit(form:NgForm){

    this.isSubmitted=true;
    //console.log(`My template from values`,form);
    // console.log(`UserName`,form.controls['username'].value);
    // console.log(`From Submitted`,form.submitted)
    //api/saveuserData(user User);//api endpoint

    this.user=new User();
    this.user.userName=form.value.userDetail.username;
    this.user.email=form.value.userDetail.email;
    this.user.course=form.value.course;
    this.user.gender=form.value.gender;

    console.log(`After bind value to User Object`,this.user);

    //api/SavaUser(user.user)
  
  }

  getCourse(value){
      console.log(value.target.value);
  }


}
