import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-class-reactive-validation',
  templateUrl: './class-reactive-validation.component.html',
  styleUrls: ['./class-reactive-validation.component.css']
})
export class ClassReactiveValidationComponent implements OnInit {
EmpRegistrationForm: FormGroup;
firstName:string;
lastName:string;
  constructor(private frmBuilder:FormBuilder) {
    this.EmpRegistrationForm = frmBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    })
   }

  ngOnInit() {
  }
  getFormData(){
    console.log(this.EmpRegistrationForm.value);
    
  }
}
