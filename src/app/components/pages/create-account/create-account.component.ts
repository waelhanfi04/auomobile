import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../../services/authentification/authentification.service'

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  constructor(private router: Router) {
  }


  ngOnInit(): void {

  }
  onCheckboxChange(checkbox:any,type:any) {
    if (checkbox.target.checked) {
      if(type === 'pro'){
        setTimeout(() => {
          this.router.navigate(['/register/pro'])
        }, 1000);
       
      }else{
        setTimeout(() => {
          this.router.navigate(['/register'])
        }, 1000);
      
      }
    }
  }

}