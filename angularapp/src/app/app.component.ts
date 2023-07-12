import { Component } from '@angular/core';
import { FirebaseService } from './servise/firebase.service';
import { MyserviceService } from './servise/myservice.service';
import { UserService } from './servise/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: string ='red'; ///declaire in child component
  age;
  showAge;
  isDestroy: boolean = true;
//inject the service
constructor(private firebaseService: FirebaseService,private myService: MyserviceService, private userService: UserService) {
 //instance /object
  this.firebaseService.createPost().subscribe(res=>{
  console.log('res from firebase',res);
  

 })
}
  title = 'angularapp 8';
  count = '1000';
  name = 'Dipika ';
  lastName ='Khobragade';

  imageURL ='https://img.freepik.com/free-photo/wide-angle-shot…uring-sunset-surrounded-by-grass_181624-22807.jpg';
  getName(){
    return this.lastName;

  }

  changeImage(e){
    this.imageURL = e.target.value;
    console.log(`catch $event`,e);
    
  }
  show(){
    alert(`button event raise`);
  }
  ageCalculator(){
    this.showAge = this.myService.ageCalculator(this.age)

  }

  getUserData() {

    this.userService.GetUsers().subscribe(data => {
 
     console.log('user data', data);
 
    });
 
   }
   changecolor(){
    this.data ='blue';
   }
   onDestroy(){
     this.isDestroy = false;
   }
}
