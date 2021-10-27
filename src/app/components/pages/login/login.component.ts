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
      // this.authService.login(this.loginForm.controls.email?.value, this.loginForm.controls.password?.value)
      //   .subscribe(
      //     (data) => {
      //       console.log(data)
      //       if (data.access_token !== undefined) {
      //         localStorage.saveItem('access_token', data.access_token);
      //         localStorage.saveItem('isAuthenticated', 'true');
      //       }
      //     }, (error: any) => {

      //     });
    }
  }
  
}