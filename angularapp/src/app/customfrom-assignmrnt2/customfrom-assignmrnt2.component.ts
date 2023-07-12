import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-customfrom-assignmrnt2',
  templateUrl: './customfrom-assignmrnt2.component.html',
  styleUrls: ['./customfrom-assignmrnt2.component.css']
})
export class CustomfromAssignmrnt2Component implements OnInit {
  

  constructor() { }
  myForm = new FormGroup({
    myInput: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(8),
      Validators.required,
    ]),
  });
      
  // constructor(private formBuilder: FormBuilder) {
  //   this.myForm = this.formBuilder.group({
  //     myText: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]]
  //   });
  // }
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
  // user: any;

  
  courseArr : string [] = [
    'Angular', 'HMTL', 'JavaScript'
  ]
  // myForm: any;
  

  OnSubmit(form:NgForm){

    this.isSubmitted=true;
    //console.log(`My template from values`,form);
    // console.log(`UserName`,form.controls['username'].value);
    // console.log(`From Submitted`,form.submitted)
    //api/saveuserData(user User);//api endpoint

    // this.user=new User();
    // this.user.userName=form.value.userDetail.username;
    // this.user.email=form.value.userDetail.email;
    // this.user.course=form.value.course;
    // this.user.gender=form.value.gender;

    // console.log(`After bind value to User Object`,this.user);

    //api/SavaUser(user.user)
  
  }

  getCourse(value){
      console.log(value.target.value);
  }

  ngOnInit() {
  }


  
}
