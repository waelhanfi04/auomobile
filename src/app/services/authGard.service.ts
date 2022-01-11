import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  dateExpiredToken: any = localStorage.getItem('expiredIn')
  dateNow: any = Math.floor(Date.now() / 1000);
  dateShouldExpireAt: any = this.dateExpiredToken - 3600;
  constructor(private router:Router) {}

  canActivate(): boolean {
    if (localStorage.getItem("isAuthenticated")==='true' && this.dateNow > this.dateShouldExpireAt) {
        return true;  
    }
    else{
      localStorage.clear()
      this.router.navigate(['/login']);
      return false;
    }
  }
}