import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  

  notAllowedNames = ['Codemind', 'Technology'];
  genders=[
    {id:'1', value:'Male'},
    {id:'2', value:'Female'}

  ]
  myReactiveForm:FormGroup; //create a instance of first step 1
  isSubmitted:boolean=false;

  // fb: any;
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }



  ngOnInit() {
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDetails' : {
    //       'username' : 'Jack',
    //       'email': 'jack@gmail.com'
    //     },
    //     'course': 'HTML',
    //     'gender' : 'Female',
    //     'skills' : ['Azure']
    //   })
    // }, 5000)


    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'course': 'JavaScript'
      })
    }, 5000)
  }



  // createForm(){
  //   this.myReactiveForm=new FormGroup({
  //     'username' :new FormControl('',Validators.required),
  //     'email':new FormControl('',[Validators.required,Validators.email]),
  //     'course':new FormControl('Angular'),
  //     'gender':new FormControl('Male'),
  //   })
  // }


  //first call the method and asking me as parameter controls and and take before its type also 
  createForm() {
    // this.myReactiveForm = new FormGroup({ //create a object  step 2 
    //   'userDetails' : new FormGroup({
    //   //  'username': new FormControl('', Validators.required),
    //   'username': new FormControl('', [Validators.required, this.NaNames.bind(this) ]) ,
    //   //  'email': new FormControl('',[Validators.required, Validators.email] ),
    //   'email': new FormControl('',[Validators.required, Validators.email], this.NaEmails  ),
    //   }),     
    //   'course': new FormControl('Angular'),
    //   'gender': new FormControl('Male'),
    //   'skills': new FormArray(
    //     [
    //       new FormControl('', Validators.required)
    //     ]
    //   )
    // })

    this.myReactiveForm = this.fb.group({
      userDetails: this.fb.group({
        username: ['',  [Validators.required, this.NaNames.bind(this) ]],
        email: ['', [Validators.required, Validators.email], this.NaEmails ]
      }),
      course: ['Angular'],
      gender: ['Male'],
      skills: this.fb.array([])
     })
  }
  OnSubmit(){
    this.isSubmitted=true;
    console.log(`my reactive form`,this.myReactiveForm)
  }

  OnAddSkills() {
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl('', Validators.required));
   }
   OnremoveSkills(index: number){
    (<FormArray>this.myReactiveForm.get('skills')).removeAt(index);

   }

   //This function is return for custon validation of user name
   NaNames(control: FormControl) {
    if (this.notAllowedNames.indexOf(control.value)  !== -1) {
      return { 'namesNotAllowed': true}
    }
    return null;
  }


  // This method will validate the email fileds 
  NaEmails(control: FormControl) : Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'codemindtechnology@gmail.com') {
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 3000)
    })
    return myResponse;
  }
   
}
