import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup; 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        '', 
        [ 
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '', 
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    })
  }

  isEmailEmptyInput: boolean = false;
  isPasswdEmptyInput: boolean = false;

  get loginFormControl(){
    let emailEmpty = this.loginForm.controls['email'].errors?.['required'];
    let emailNotMatch = this.loginForm.controls['email'].errors?.['email'];
    let passwdEmpty = this.loginForm.controls['password'].errors?.['required']

    if( (emailEmpty || emailNotMatch) && passwdEmpty){
      this.isEmailEmptyInput = true;
      this.isPasswdEmptyInput = true;
    }
    else if(emailEmpty || emailNotMatch){
      this.isEmailEmptyInput = true;
      this.isPasswdEmptyInput = false;
    }
    else if(passwdEmpty){
      this.isPasswdEmptyInput = true;
      this.isEmailEmptyInput = false;
    }
    else{
      this.isEmailEmptyInput = false;
      this.isPasswdEmptyInput = false;
    }
    return this.loginForm.controls
  }
}
