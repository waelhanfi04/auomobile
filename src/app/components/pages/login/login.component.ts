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
            console.log(data,'data.message',data.message)
            this.errorMsg= ''
           if(data.accessToken!=='' || data.accessToken !==null){

              localStorage.setItem('accessToken', data.accessToken);
              localStorage.setItem('isAuthenticated', 'true');
              localStorage.setItem('type', data.type);
             localStorage.setItem('idUser', data.id);
           this.router.navigate([''])
         }else  if(data.message ==='User Not found.'){
            this.errorMsg= 'Email incorrect!';
          }else if(data.message==='Invalid Password!'){
            this.errorMsg='Mot de passe incorrect!'
          }
          
          }, (error: any) => {
           
          });
    }
  }
  
}