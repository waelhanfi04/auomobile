import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../../services/authentification/authentification.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  errorMsg='';
  isSubmitting: boolean = false;
  constructor(private authService: AuthentificationService,private router:Router) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    })
  }

  ngOnInit(): void {
  }
  login() {
    this.isSubmitting=true
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.controls.email?.value, this.loginForm.controls.password?.value)
        .subscribe(
          (data:any) => {
            this.isSubmitting= false;
            console.log(data)
            this.errorMsg= ''
            //if(data.accessToken){

              localStorage.saveItem('accessToken', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAyOTEwODM2LWNlMDktNDE1My1hZDE0LWJmMDM3N2ZjZTYyOSIsImlhdCI6MTYzNTg4ODc2MCwiZXhwIjoxNjM1OTc1MTYwfQ.gHRuHjsJUXfoQbiE6VeNzDgF8smwMwZ1OJz3bK43sC8");
              localStorage.saveItem('isAuthenticated', 'true');
              this.router.navigate([''])
           // }

/*
   "message": "User Not found." if wrong emal 
    wrong pwd
    "accessToken": null,
    "message": "Invalid Password!"
*/
          
          }, (error: any) => {
            if(error.message ==='User Not found.'){
              this.errorMsg= 'Invalid email!';
            }else if(error.message==='Invalid Password!'){
              this.errorMsg='Invalid Password!'
            }

          });
    }
  }
  
}