import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  updateProfileForm: FormGroup
  successMsg='';
  errorMsg='';
  isSubmitting: boolean = false;
  constructor(private router:Router) {
    this.updateProfileForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      userPhone: new FormControl(""),
      userAddress: new FormControl(""),
    })
  }

  ngOnInit(): void {
  }
updateInfo(){
  
}
}
