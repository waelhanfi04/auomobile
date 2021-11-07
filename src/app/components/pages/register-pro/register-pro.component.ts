import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthentificationService } from '../../../services/authentification/authentification.service'
import { arrayCategories } from 'src/app/shared/config';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-pro',
  templateUrl: './register-pro.component.html',
  styleUrls: ['./register-pro.component.css']
})
export class RegisterProComponent implements OnInit {
  registerForm: FormGroup;
  registerForm2: FormGroup;
  step1:boolean=true;
  step2:boolean=false;
  categoriesList=arrayCategories;
  errorMsg='';
  successMsg='';
  isSubmitting: boolean = false;
  constructor(private authService: AuthentificationService,private router:Router) {
    this.registerForm = new FormGroup({
      SIRET:new FormControl('',Validators.required),
      companyName:new FormControl('',Validators.required),
      companyCategory:new FormControl('',Validators.required),
      companyAddress:new FormControl('',Validators.required),
      companyZipCode:new FormControl('',Validators.required),
      companyPhone:new FormControl('',Validators.required),
    });
    this.registerForm2 = new FormGroup({
      gender:new FormControl('',Validators.required),
      firstName:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required,Validators.minLength(8)]),
      confirmPassword: new FormControl("", [Validators.required]),
    },  { validators: MutchPasswordValidator() }
    )}

  ngOnInit(): void {

  }
  register(){
    this. isSubmitting=true;
    if (this.registerForm.valid && this.registerForm2.valid) {
      this.authService.registerPro(
        this.registerForm2.controls.email?.value,
         this.registerForm2.controls.password?.value,
         this.registerForm.controls.SIRET?.value,
         this.registerForm.controls.companyName?.value,
         this.registerForm.controls.companyCategory?.value,
         this.registerForm.controls.companyAddress?.value,
         this.registerForm.controls.companyZipCode?.value,
         this.registerForm.controls.companyPhone?.value,
         this.registerForm2.controls.gender?.value,
         this.registerForm2.controls.firstName?.value,
         this.registerForm2.controls.lastName?.value,
         
         )
        .subscribe(
          (data:any) => {
            console.log(data)
            if(data.message==='User was registered successfully!'){
              this.successMsg='User was registered successfully!';
              this.errorMsg='';
              this.router.navigate(['login'])
            }else{
              this.errorMsg=data.message;
              this.successMsg='';
            }
            /*message: "User was registered successfully!"
             "message": "Failed! Email is already in use!"
            */

          }, (error: any) => {

          });
    }
  }
  nextStep(){
    this.isSubmitting=true;
    if(this.registerForm.valid)
  {  this.step1=false;
  this.step2=true;
  this.isSubmitting=false;
}
 
  }

  PreviousStep(){
  //  this.isSubmitting=true;
  this.step1=true;
  this.step2=false;
  // this.isSubmitting=false;

 
  }
}

export function MutchPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.get("password");
    const confirmPassword = control.get("confirmPassword");

    return password?.value &&
      confirmPassword?.value &&
      password.value !== confirmPassword.value
      ? { mustMatch: true }
      : null;
  };
}