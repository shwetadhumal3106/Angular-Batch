import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AddressObj {
  locationId: number;
  divisionId: string;
  stateId: string;
  userId: string;
  districtId: string;
  talukaId: string;
  villageId: string;
  stateName: string
  divisionName: string;
  districtName: string;
  talukaName: string;
  villageName: string;

  constructor() {
    this.locationId = 0;
    this.stateId = '';
    this.divisionId = '';
    this.districtId = '';
    this.talukaId = '';
    this.villageId = '';
    
  this.stateName= "";
  this.divisionName= "";
  this.districtName= "";
  this.talukaName= "";
  this.villageName= "";
  }
}
