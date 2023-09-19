import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})

export class RegisterationComponent {
  regForm!: FormGroup; 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.regForm = this.fb.group({
      name: [
        '',
        [ 
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
        ]
      ],
      email: [
        '', 
        [ 
          Validators.required,
          Validators.email
        ]
      ],
      userName: [
        '',
        [ 
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          Validators.pattern(/^\S+$/)
        ]
      ],
      password: [
        '', 
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        ]
      ],
      confirmPassword: [
        '', 
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    })
  }

  isNameEmptyInput: boolean = false;
  isUserNameEmptyInput: boolean = false;
  isEmailEmptyInput: boolean = false;
  isPasswdEmptyInput: boolean = false;
  isConfPasswdEmptyInput: boolean = false;
  passValidation: boolean = true;
  passwdPattern: any;
  isUserNamePattern: boolean = false; 
  isPasswdPattern: boolean = false; 
  get RegisterFormControl(){
    let nameEmpty = this.regForm.controls['name'].errors?.['required'];
    let userNameEmpty = this.regForm.controls['userName'].errors?.['required'];
    let emailEmpty = this.regForm.controls['email'].errors?.['required'];
    let emailNotMatch = this.regForm.controls['email'].errors?.['email'];
    let passwdEmpty = this.regForm.controls['password'].errors?.['required']
    let confPasswdEmpty = this.regForm.controls['confirmPassword'].errors?.['required']
    let passwdPattern = this.regForm.controls['password'].errors?.['pattern']
    let userNamePattern = this.regForm.controls['userName'].errors?.['pattern']

    if( nameEmpty && (emailEmpty || emailNotMatch ) && userNameEmpty && passwdEmpty && confPasswdEmpty ){
      this.isNameEmptyInput = true;
      this.isUserNameEmptyInput = true;
      this.isEmailEmptyInput = true;
      this.isPasswdEmptyInput = true;
      this.isConfPasswdEmptyInput = true;
    }
    else if(nameEmpty){
      this.isNameEmptyInput = true;
      this.isUserNameEmptyInput = false;
      this.isEmailEmptyInput = false;
      this.isPasswdEmptyInput = false;
      this.isConfPasswdEmptyInput = false;
    }
    else if(userNameEmpty){
      this.isNameEmptyInput = false;
      this.isUserNameEmptyInput = true;
      this.isEmailEmptyInput = false;
      this.isPasswdEmptyInput = false;
      this.isConfPasswdEmptyInput = false;
    }
    else if(emailEmpty || emailNotMatch){
      this.isNameEmptyInput = false;
      this.isUserNameEmptyInput = false;
      this.isEmailEmptyInput = true;
      this.isPasswdEmptyInput = false;
      this.isConfPasswdEmptyInput = false;
    }
    else if(passwdEmpty){
      this.isNameEmptyInput = false;
      this.isUserNameEmptyInput = false;
      this.isEmailEmptyInput = false;
      this.isPasswdEmptyInput = true;
      this.isConfPasswdEmptyInput = false;
    }
    else if(confPasswdEmpty){
      this.isNameEmptyInput = false;
      this.isUserNameEmptyInput = false;
      this.isEmailEmptyInput = false;
      this.isPasswdEmptyInput = false;
      this.isConfPasswdEmptyInput = true;
    }
    else if(this.regForm.controls['password'].value !== this.regForm.controls['confirmPassword'].value){
      this.passValidation = false; 
    }
    else if(userNamePattern != undefined){
      this.isUserNamePattern = true;  
    }
    else if(passwdPattern != undefined){
      this.isPasswdPattern = true;  
    }
    else{
      this.isNameEmptyInput = false;
      this.isUserNameEmptyInput = false;
      this.isEmailEmptyInput = false;
      this.isPasswdEmptyInput = false;
      this.isConfPasswdEmptyInput = false;
      this.isUserNamePattern = false; 
      this.passValidation = true;
      this.isPasswdPattern = false;  
    }
    console.log(this.regForm.controls['userName'])
    console.log(this.isUserNamePattern)
    return this.regForm.controls
  }
}

