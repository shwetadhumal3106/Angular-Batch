import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-switch',
  templateUrl: './assignment-switch.component.html',
  styleUrls: ['./assignment-switch.component.css']
})
export class AssignmentSwitchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getSelectedValue(value){
    console.log(value.target.value);
    //this.selectedValue=value.target.value;
  }

}
