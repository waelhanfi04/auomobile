import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router:Router) {}

  canActivate(): boolean {
    if (localStorage.getItem("isAuthenticated")==='true') {
      return true;
    }
    else{
      localStorage.clear()
      this.router.navigate(['/login']);
      return false;
    }
  }
}