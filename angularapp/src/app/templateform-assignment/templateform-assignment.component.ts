import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform-assignment',
  templateUrl: './templateform-assignment.component.html',
  styleUrls: ['./templateform-assignment.component.css']
})
export class TemplateformAssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  OnSubmit(form:NgForm){
    console.log(`My template from values`,form.value);
    // console.log(`UserName`,form.controls['username'].value);
    // console.log(`From Submitted`,form.submitted)
    //api/saveuserData(user User);//api endpoint
  }
}
