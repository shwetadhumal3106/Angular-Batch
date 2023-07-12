import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../servise/myservice.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component implements OnInit {


  // This is nothing but constructer dependence injection
  constructor(private objMyserviceService :MyserviceService ) { 
    
  }

  ngOnInit() {
    
         //create a instance of my service class
        //  let objMyserviceService =new  MyserviceService();
        
        this. objMyserviceService .GetData (); 
    

  }

  // Print(){
  //   alert('File printed sucessfully');
  // }

  Print()
  {

    //instance of myserviceSerives class
    //object
    // let objMyserviceService =new  MyserviceService();
     this.objMyserviceService .PrintFile(); 
  }
}


