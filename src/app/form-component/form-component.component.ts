import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  registerForm: FormGroup;
  fName: string;
  lastname: string;
  firstName: string;
  jsonData: string
  firstNameLength = 0;
  loopControlsDate;

  //dynamic validation using jSOn object
  validationMessage = {
    'lastname': {
      'required': 'Last Name is required',
      'minlenght': 'Last name must be greater than 5',
      'maxlength': 'Last name must be less than 8'
    }
  };

  //contain list of object when any controls validation fail && it conatins number of controls like below format
  formErrors = {
    'lastname': ''
  }
  //end
  constructor(private frmBuilder: FormBuilder) {
    this.registerForm = frmBuilder.group({

      // fName: ['', Validators.required],
      // lastname: ['', Validators.required]
      //fName: new FormControl(),
      fName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]],
      // lastname: ['', [Validators.required, Validators.maxLength(5)]],
      lastname: ['', Validators.required],
      skills: frmBuilder.group({
        address: ['', Validators.required],
        rdIndia: [''],
        rdAus: ['']
      })
    });

    this.registerForm.get('fName').valueChanges.subscribe((value: any) => {
      // console.log(value);
      // this.firstNameLength = value.length;
      console.log(JSON.stringify(value));


    })
  }

  ngOnInit() {
    this.addvalue(12, 10);

  }

  //get validatios error throght loop

  logValidationErrors(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl)
      } else {

       // abstractControl.markAsDirty();
       if(abstractControl && !abstractControl.valid){
         const message = this.validationMessage[key];
        // console.log("Validation message" + message);
         console.log(abstractControl.errors);
         
       }
      }
      //console.log('Key Data Validation' + abstractControl);

    })
  }

  // test data
  onloadGetLoopErrorControls(): void {
    this.logValidationErrors(this.registerForm)
  }
  //end


  //get all controld keys through loop
  logKeyValuePairs(group: FormGroup): void {
    //console.log(Object.keys(group.controls));
  }
  get f() { return this.registerForm.controls; }
  getInputData(registerForm: any) {
    // this.firstName = registerForm.controls.fName.value;
    //this.firstName = registerForm.controls.fName.value; // method 1 to get control value
    this.firstName = registerForm.get('fName').value;   // method 2 to get control value

    this.jsonData = JSON.stringify(registerForm.value);
    console.log(this.jsonData);

  }
  setValue(): void {
    // this.registerForm.patchValue({
    //   "fName": "Khan",
    //   "lastname": "admin",
    //   skills: {
    //     rdIndia: 'India'
    //   }

    // })
    this.logKeyValuePairs(this.registerForm)
  }

  addvalue(a, b) {
    let rslt = a + b;
    console.log(rslt);

  }
}
