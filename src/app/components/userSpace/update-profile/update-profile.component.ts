import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { arrayCategories } from 'src/app/shared/config';
import { ProfileService } from '../../../services/profile/profile.service'
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  updateProfileForm: FormGroup
  updateProfileFormPro: FormGroup
  successMsg = '';
  errorMsg = '';
  isSubmitting: boolean = false;
  user: any
  categoriesList=arrayCategories;
  accountType:string=''
  constructor(private router: Router, private ProfileService: ProfileService) {
    this.updateProfileForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      companyAddress: new FormControl(""),
      companyPhone: new FormControl("")
    });
    this.updateProfileFormPro= new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      companyAddress: new FormControl(""),
      companyPhone: new FormControl(""),
      companyCategory: new FormControl(""),
      companyName: new FormControl(""),
      companyZipCode: new FormControl(""),
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem('type') === 'part'){
      this.accountType='part'
    }else if(localStorage.getItem('type') === 'pro'){
      this.accountType='pro'
    }
    this.getUserDetails()
  }
  getUserDetails() {
    this.ProfileService.userDetails().subscribe((data: any) => {
      console.log('dataa user', data.user)
      this.user = data.user
    })
  }
  updateInfo(type:any) {
    this.isSubmitting = true;
   
      let user = {
        firstName: this.updateProfileForm.get('firstName')?.value,
        lastName: this.updateProfileForm.get('lastName')?.value,
        companyPhone: this.updateProfileForm.get('companyPhone')?.value,
        companyAddress: this.updateProfileForm.get('companyAddress')?.value,
        companyZipCode:'',
        companyCategory:'',
        companyName:''
      }
      let userPro = {
        firstName: this.updateProfileFormPro.get('firstName')?.value,
        lastName: this.updateProfileFormPro.get('firstName')?.value,
        companyName: this.updateProfileFormPro.get('companyName')?.value,
        companyAddress: this.updateProfileFormPro.get('companyAddress')?.value,
        companyPhone: this.updateProfileFormPro.get('companyPhone')?.value,
        companyZipCode:this.updateProfileFormPro.get('companyZipCode')?.value,
        companyCategory:this.updateProfileFormPro.get('companyCategory')?.value,
      }
      if (type === 'pro' && this.updateProfileFormPro.valid) {
        this.ProfileService.updateProfile(userPro).subscribe((data: any) => {
          this.isSubmitting = false;
          console.log('dataa updates', data)
         if(data.message=== 'user was updated successfully!') {
          this.successMsg = 'Votre compte a été mis à jour avec succès!';
          setTimeout(() => {
            this.router.navigate(['/mon-espace'])
          }, 2000);
         }
          
        })
      } else if (type === 'part' && this.updateProfileForm.valid) {
        this.ProfileService.updateProfile(user).subscribe((data: any) => {
          this.isSubmitting = false;
          if(data.message=== 'user was updated successfully!') {
            this.successMsg = 'Votre compte a été mis à jour avec succès!';
            setTimeout(() => {
              this.router.navigate(['/mon-espace'])
            }, 2000);
           }
        })
      }
    }
  
}
