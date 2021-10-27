import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthentificationService } from '../../../services/authentification/authentification.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  constructor(private authService: AuthentificationService) {
    this.registerForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required,Validators.minLength(8)]),
      confirmPassword: new FormControl("", [Validators.required]),
    },  { validators: MutchPasswordValidator() }
    )}

  ngOnInit(): void {
  }
  register(){
    if (this.registerForm.valid) {
      // this.authService.register(this.loginForm.controls.email?.value, this.loginForm.controls.password?.value,this.loginForm.controls.confirmPassword?.value)
      //   .subscribe(
      //     (data) => {
      //       console.log(data)

      //     }, (error: any) => {

      //     });
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