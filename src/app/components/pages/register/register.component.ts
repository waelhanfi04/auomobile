import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../../services/authentification/authentification.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMsg='';
  successMsg='';
  isSubmitting: boolean = false;
  constructor(private authService: AuthentificationService,private router:Router) {
    this.registerForm = new FormGroup({
      username:new FormControl("",Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required,Validators.minLength(8)]),
      confirmPassword: new FormControl("", [Validators.required]),
    },  { validators: MutchPasswordValidator() }
    )}

  ngOnInit(): void {
  }
  register(){
    this.isSubmitting = true;
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.controls.username?.value,this.registerForm.controls.email?.value, this.registerForm.controls.password?.value)
        .subscribe(
          (data:any) => {
            this.isSubmitting = false;
            console.log(data);
            if(data.message==='User was registered successfully!'){
              this.successMsg='User was registered successfully!'
              this.errorMsg=''
             // this.router.navigate(['login'])
            }else{
              this.errorMsg=data.message;
              this.successMsg='';
            }

          }, (error: any) => {

          });
    }
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