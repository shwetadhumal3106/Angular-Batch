import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

//import { Component } from "@angular/core";

@Component({
    selector:`app-test`,
   // template: ` <h1> This is My first component </h1>`
    templateUrl: `./test.component.html`
})
export class TestComponent implements OnInit{
    
  //taking value from parent
     @Input()  childName: string;
     @Input()   count: string;

    @Input() chnage:string;


     //delcelare output property with help of event emitter
     @Output() fromChild: EventEmitter<string>=new EventEmitter<string>();

     
   ngOnInit(): void {
      console.log('from parent', this.childName);
      console.log('count', this.count);
      console.log('change is',this.chnage);
   }

     //written the method
   SendToParet(){
   //custom event i.e fromChlid
   this.fromChild.emit(`Data is coming from child component`);

   }
   
}

