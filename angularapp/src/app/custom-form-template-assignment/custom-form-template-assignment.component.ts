import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-custom-form-template-assignment',
  templateUrl: './custom-form-template-assignment.component.html',
  styleUrls: ['./custom-form-template-assignment.component.css']
})
export class CustomFormTemplateAssignmentComponent implements OnInit {



allowedEmails = ['codemindtechnology.com'];
errorMessage: string;
checkEmailValidity(email: string) {
  if (!email) {
    // If email is empty, clear the error message
    this.errorMessage = '';
    return;
  }
  
  if (!this.isEmailAllowed(email)) {
    // If email is not allowed, set the error message
    this.errorMessage ;
  } else {
    // If email is allowed, clear the error message
    this.errorMessage = '';
  }
}

isEmailAllowed(email: string): boolean {
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  return regex.test(email) && this.allowedEmails.includes(email);
}
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

  courseArr : string [] = [
    'Angular', 'HMTL', 'JavaScript'
  ]
 // username="Rocky"
  
  constructor() { }

  ngOnInit() {
  }

  OnSubmit(form:NgForm){
    console.log(`My template from values`,form.value);
  }

}
