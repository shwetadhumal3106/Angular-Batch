import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PwdgeneratorComponent } from './pwdgenerator/pwdgenerator.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AssignmentSwitchComponent } from './assignment-switch/assignment-switch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CustomDirective } from './custom.directive';
// import { PraticesComponent } from './pratices/pratices.component';
import { StructerDirectivesComponent } from './structer-directives/structer-directives.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoComponent } from './demo/demo.component';
import { CustomFormTemplateAssignmentComponent } from './custom-form-template-assignment/custom-form-template-assignment.component';
import { HelloComponent } from './hello/hello.component';
import { TemplatefromComponent } from './templatefrom/templatefrom.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { CustomfromAssignmrnt2Component } from './customfrom-assignmrnt2/customfrom-assignmrnt2.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Service2Component } from './service2/service2.component';
import { Service1Component } from './service1/service1.component';
import { ReactiveAssignmentComponent } from './reactive-assignment/reactive-assignment.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyserviceService } from './servise/myservice.service';
import { PostComponent } from './post/post.component';
import { PostAssignmentComponent } from './post-assignment/post-assignment.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { Todo1Component } from './todo1/todo1.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
// import { Com1Component } from './com1/com1.component';
// import { Com2Component } from './com2/com2.component';
// import { Com3Component } from './com3/com3.component';
// import { Com4Component } from './com4/com4.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
// import { RapidapiAssignmentComponent } from './rapidapi-assignment/rapidapi-assignment.component';

import { PagnotfoundComponent } from './pagnotfound/pagnotfound.component';
import { TryComponent } from './try/try.component';
import { TrendingGifsComponent } from './trending-gifs/trending-gifs.component';
import { SearchgifsComponent } from './searchgifs/searchgifs.component';
import { CricketinfoComponent } from './cricketinfo/cricketinfo.component';
import { AddressComponent } from './address/address.component';
import { FireboxComponent } from './firebox/firebox.component';
import { SearchComponent } from './search/search.component';
import { VechicalComponent } from './vechical/vechical.component';
import { CarComponent } from './vechical/car/car.component';
import { BikeComponent } from './vechical/bike/bike.component';
import { BusComponent } from './vechical/bus/bus.component';
import { BicycleComponent } from './vechical/bicycle/bicycle.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    DatabindingComponent,
    PwdgeneratorComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    AssignmentSwitchComponent,
    NgstyleComponent,
    NgclassComponent,
    CustomDirective,
    // PraticesComponent,
    StructerDirectivesComponent,  
    DemoComponent,
    CustomFormTemplateAssignmentComponent,
    HelloComponent,
    TemplatefromComponent,
    CustomfromAssignmrnt2Component,
    ReactiveformComponent,
    Service2Component,
    Service1Component,
    ReactiveAssignmentComponent,
    PostComponent,
    PostAssignmentComponent,
    DropdownComponent,
    Todo1Component,
    RapidapiComponent,
    // Com1Component,
    // Com2Component,
    // Com3Component,
    // Com4Component,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    PagnotfoundComponent,
    ReactiveAssignmentComponent,
    TryComponent,
    TrendingGifsComponent,
    SearchgifsComponent,
    CricketinfoComponent,
    AddressComponent,
    FireboxComponent,
    SearchComponent,
    VechicalComponent,
    CarComponent,
    BikeComponent,
    BusComponent,
    BicycleComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    

  ],

  //we regeister our serives .will create single instance of registered service
  //
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
