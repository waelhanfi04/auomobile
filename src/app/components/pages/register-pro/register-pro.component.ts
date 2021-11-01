import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthentificationService } from '../../../services/authentification/authentification.service'
import { arrayCategories } from 'src/app/shared/config';
@Component({
  selector: 'app-register-pro',
  templateUrl: './register-pro.component.html',
  styleUrls: ['./register-pro.component.css']
})
export class RegisterProComponent implements OnInit {
  registerForm: FormGroup;
  step1:boolean=true;
  step2:boolean=false
  categoriesList=arrayCategories;
  constructor(private authService: AuthentificationService) {
    this.registerForm = new FormGroup({
      SIRET:new FormControl(''),
      companyName:new FormControl(''),
      companyCategory:new FormControl(''),
      companyAddress:new FormControl(''),
      companyZipCode:new FormControl(''),
      companyPhone:new FormControl(''),
      gender:new FormControl(''),
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required,Validators.minLength(8)]),
      confirmPassword: new FormControl("", [Validators.required]),
    },  { validators: MutchPasswordValidator() }
    )}

  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe((val:any)=>{
      console.log('vaaaaal',val)
    })
  }
  register(){
    if (this.registerForm.valid) {
      this.authService.registerPro(this.registerForm.controls.email?.value,
         this.registerForm.controls.password?.value,
         this.registerForm.controls.SIRET?.value,
         this.registerForm.controls.companyName?.value,
         this.registerForm.controls.companyCategory?.value,
         this.registerForm.controls.companyAddress?.value,
         this.registerForm.controls.companyZipCode?.value,
         this.registerForm.controls.companyPhone?.value,
         this.registerForm.controls.gender?.value,
         this.registerForm.controls.firstName?.value,
         this.registerForm.controls.lastName?.value,
         
         )
        .subscribe(
          (data) => {
            console.log(data)
            /*message: "User was registered successfully!"
             "message": "Failed! Email is already in use!"
            */

          }, (error: any) => {

          });
    }
  }
  nextStep(){
    this.step1=false;
  this.step2=true;
 
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