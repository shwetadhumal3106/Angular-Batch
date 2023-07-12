import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../servise/myservice.service';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component implements OnInit {

    //we have inject  MyserviceService class

  constructor(private objMyserviceService :MyserviceService) { }

  ngOnInit() {
  }


  // PrintFile(){
  //   alert('File printed sucessfully');
  // }

  Print(){

    //instance of myserviceSerives
    //object
    // let objMyserviceService =new  MyserviceService();
    this.objMyserviceService .PrintFile(); 
  }

}
