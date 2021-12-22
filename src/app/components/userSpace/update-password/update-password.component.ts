import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  updatePasswordForm: FormGroup
  successMsg='';
  errorMsg=''
  isSubmitting: boolean = false;
  wrongOldPassword='';
  constructor(private router:Router,private ProfileService:ProfileService) {
    this.updatePasswordForm = new FormGroup({
      oldPassword: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required,Validators.minLength(8)]),
      confirmPassword: new FormControl("", [Validators.required]),
    },  { validators: MutchPasswordValidator() })
  }
  ngOnInit(): void {
  }
  updatePassword() {
    this.isSubmitting=true
    if(this.updatePasswordForm.valid)
    {this.ProfileService.updatePassword(this.updatePasswordForm.get('oldPassword')?.value, this.updatePasswordForm.get('password')?.value)
    .subscribe((response:any)=>{
      console.log('dataa updates pass -->')
      this.isSubmitting=false
      console.log('updateee pass',response)
      if(response.message=== "Invalid Password!")
      {
        this.errorMsg="Ancien mot de passe est incorrect"
      }else if(response.message=== "password was updated successfully!"){
        this.errorMsg=''
        this.successMsg='Votre mot de passe a été mis à jour avec succès!'
        setTimeout(() => {
          localStorage.clear();
          this.router.navigate(['/login'])
        }, 2000);
      }
    })
    // updatePassword(oldPassword:any,newPassword:any){
    //
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