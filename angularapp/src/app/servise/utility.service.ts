import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  // decalre subject obserable.
  userName = new Subject<any>();
// userName = new BehaviorSubject('Angular Ui Developer')
  constructor() { }
}
