import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsConnectedService implements CanActivate {
  constructor(private router:Router) {}

  canActivate(): boolean {
    if (localStorage.getItem("isAuthenticated")!=='true') {
      return true;
    }
    else{
      this.router.navigate(['']);
      return false;
    }
  }
}