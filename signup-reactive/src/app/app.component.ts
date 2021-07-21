import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordChecker} from "./custom-validators/password-checker"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'signup-reactive';
  registrationForm: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder){}


  ngOnInit() {
    this.registrationForm = this.formbuilder.group({
      firstName: ['', Validators.required],       // ['default_value', validators. . ., ]
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validators: PasswordChecker("password","confirmPassword"),
    });
  }

  onSubmit(){
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }

    console.table(this.registrationForm.value);
    console.table(this.registrationForm);

    alert("Success Signup\n" + JSON.stringify(this.registrationForm.value))
  }

  get h(){
    return this.registrationForm.controls;
  }

  onReset(){
    this.submitted = false;
    this.registrationForm.reset()
  }


}
