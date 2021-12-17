import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  updatePasswordForm: FormGroup
  successMsg='';
  isSubmitting: boolean = false;
  wrongOldPassword='';
  constructor(private router:Router) {
    this.updatePasswordForm = new FormGroup({
      oldPassword: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required,Validators.minLength(8)]),
      confirmPassword: new FormControl("", [Validators.required]),
    },  { validators: MutchPasswordValidator() })
  }
  ngOnInit(): void {
  }
updatePassword(){

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