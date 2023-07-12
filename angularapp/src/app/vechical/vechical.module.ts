import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BicycleComponent } from './bicycle/bicycle.component';
import { BikeComponent } from './bike/bike.component';
import { BusComponent } from './bus/bus.component';
import { CarComponent } from './car/car.component';
import { VechicalComponent } from './vechical.component';
import { RouterModule, Routes } from '@angular/router';




const prodRoutes : Routes = [
  { path: '', component: VechicalComponent, children: [ // localhost:4200/product
    {path : 'bicycle', component: BicycleComponent},
    {path: 'bike', component: BikeComponent},
    {path: 'bus', component: BusComponent},
    {path: 'car', component: CarComponent}
  ]},
]

@NgModule({
  declarations: [
    VechicalComponent,
    CarComponent,
    BikeComponent,
    BusComponent,
    BicycleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes)

  ],
  exports: [RouterModule]

})
export class VechicalModule {
  constructor(){
    console.log('vechical module calls');
  }
 }
