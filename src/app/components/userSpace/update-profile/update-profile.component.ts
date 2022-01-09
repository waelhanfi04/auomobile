import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { arrayCategories } from 'src/app/shared/config';
import { ProfileService } from '../../../services/profile/profile.service'
// import { ImageCroppedEvent } from 'ngx-image-cropper';
// import { ImageCropperModule } from 'ngx-image-cropper';
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
  userPic:any
  // srcFile:any
  // croppedDataUrl:any
  // picName:any
  // imageChangedEvent:any;
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
      photo: new FormControl(""),
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
  onFileChange(e: any) {
   
  if (
    e.target.files[0].type == "image/png" ||
    e.target.files[0].type == "image/jpeg" ||
    e.target.files[0].type == "image/jpg" 
  ) {

    var file = e.target.files[0];
    var r = new FileReader();
    if (e.target.files[0]) {
      r.readAsDataURL(file);
      r.onload = () => {
       const fileKit=r.result
      //  if(this.accountType==='part'){
      //   this.updateProfileForm.get('photo')?.setValue(fileKit)   
      // }else if(this.accountType==='pro'){
      //   this.updateProfileFormPro.get('photo')?.setValue(fileKit)   
      // }
       this.userPic=fileKit
   
    }
  }
}
}
  getUserDetails() {
    this.ProfileService.userDetails().subscribe((data: any) => {
      console.log('dataa user', data.user)
      this.user = data.user
      this.userPic=data.user.photo
    })
  }
  updateInfo(type:any) {
    this.isSubmitting = true;
   
      let user = {
        firstName: this.updateProfileForm.get('firstName')?.value,
        lastName: this.updateProfileForm.get('lastName')?.value,
        companyPhone: this.updateProfileForm.get('companyPhone')?.value,
        companyAddress: this.updateProfileForm.get('companyAddress')?.value,
        photo:  this.userPic,
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
        photo: this.userPic,
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
    onImgError(event: any) {
      event.target.src = '../../../../assets/images/new-icons/default-car.jpg';
    }
    // openModal(content: any) {
    //   this.modalService.open(content);
    // }
  
    // closeModal(content: any) {
    //   this.modalService.dismissAll(content);
    // }
  //   imageCropped(event: ImageCroppedEvent) {
  //     this.croppedDataUrl = event.base64;
  //     this.srcFile = this.base64ToFile(event.base64, this.picName);
  //     return this.srcFile;
  //   }
  //   base64ToFile(data: any, filename: any) {
  //     const arr = data.split(",");
  //     const mime = arr[0].match(/:(.*?);/)[1];
  //     const bstr = atob(arr[1]);
  //     let n = bstr.length;
  //     let u8arr = new Uint8Array(n);
  
  //     while (n--) {
  //       u8arr[n] = bstr.charCodeAt(n);
  //     }
  
  //     return new File([u8arr], filename, { type: mime });
  //   }
    
  // fileChangeEvent(event: any): void {
  //   this.imageChangedEvent = event;
  //   this.picName = this.imageChangedEvent.target.files[0].name;
  // }

}
