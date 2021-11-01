import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../../../services/authentification/authentification.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  errorMsg='';
  constructor(private authService: AuthentificationService) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required,Validators.minLength(8),]),
    })
  }

  ngOnInit(): void {
  }
  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.controls.email?.value, this.loginForm.controls.password?.value)
        .subscribe(
          (data:any) => {
            console.log(data)
            if(data.message){
              this.errorMsg= data.message;
            }else{
              localStorage.saveItem('accessToken', data.accessToken);
              localStorage.saveItem('isAuthenticated', 'true');
            }
            /*
            accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAyOTEwODM2LWNlMDktNDE1My1hZDE0LWJmMDM3N2ZjZTYyOSIsImlhdCI6MTYzNTgwMDc2OSwiZXhwIjoxNjM1ODg3MTY5fQ.F_Sji_C7Z2XuUImcHyQoz_NAtZk2NdHnmOjMMjI_zDM"
email: "mm@gmail.com"
id: "02910836-ce09-4153-ad14-bf0377fce629"
            */

/*

   "message": "User Not found." if emal 8alt

    email shih w pass ghalet
    "accessToken": null,
    "message": "Invalid Password!"


*/
          
          }, (error: any) => {

          });
    }
  }
  
}