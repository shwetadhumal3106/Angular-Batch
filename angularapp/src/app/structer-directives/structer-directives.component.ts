import { Component, OnInit } from '@angular/core';

class Course {
  name: string;
  
  }

  // getSelectedValue(value){
  //   console.log(value.target.value);
  //   //this.selectedValue=value.target.value;
  // }  

@Component({
  selector: 'app-structer-directives',
  templateUrl: './structer-directives.component.html',
  styleUrls: ['./structer-directives.component.css']
})


  export class StructerDirectivesComponent {
  isChecked: boolean = false;
  courses: Course[] = [
     { name: 'JavaScript'},
     { name: 'Java'},
     { name: 'Python'},
     { name: 'C++'},
     { name: 'Bootstarp'}
  ];
  exampleValue: string = 'value1';
  }

 