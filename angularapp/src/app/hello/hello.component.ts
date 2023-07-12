import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }

  genders=[
    {
      id:'1',value: 'Male'
    },
    {
      id:'2',value:'Female'
    }
  ]
 
  defaultGenderValue='Male'

  formData = {
    firstName: ''
  };

  onSubmit(form: NgForm) {
    console.log(form);
    // Here you can submit the form data to a server or perform any other action
  }

  ngOnInit() {
  }

}
