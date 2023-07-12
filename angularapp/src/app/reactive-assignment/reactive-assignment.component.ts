import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-assignment',
  templateUrl: './reactive-assignment.component.html',
  styleUrls: ['./reactive-assignment.component.css']
})
export class ReactiveAssignmentComponent implements OnInit {

  
  genders=[
    'Male',
    'Female'
  ]
  
  myReactiveForm:FormGroup;
  yourReactiveForm:FormGroup;
 
  
  constructor() { 
    this.createForm();

  }

  ngOnInit() {
  }
  countryeArr : string [] = [
    'India','China','America'
  ]

  phoneeArr:string[]=[
    '+919404388298','+745478963111','+991545221215121'
  ]

  // genders:string[]=[
  //   'Male',

  // ]
  createForm() {
    this.myReactiveForm = new FormGroup({
      
       'name': new FormControl('', [Validators.required]),
        'date': new FormControl('', Validators.required),
        'gender':new FormControl('', Validators.required),
        'course' :new FormControl('', Validators.required),
        'phone':new FormControl('', Validators.required),
      
    })
    this.yourReactiveForm=new FormGroup({
      'username':new FormControl('',[Validators.required]), 
      'date': new FormControl('',[Validators.required, Validators.email] ),
      'password':new FormControl('',[Validators.required]),
      'comfirm':new FormControl('',[Validators.required]),
    
    })
  
  }

    
    OnSubmit(){
      
      console.log(`my reactive form`,this.myReactiveForm)
    }
    
    OffSubmit(){
      console.log('your reactive form',this.yourReactiveForm);
      
    }
}
