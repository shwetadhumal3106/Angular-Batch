import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {


  //dependacy injection
  constructor(private el:ElementRef) 
  { 
     el.nativeElement.style.backgroundColor='gray';
  }

}
