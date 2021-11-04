import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
showAddListing:boolean=false
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('isAuthenticated')==='true'){
      this.showAddListing=true;

    }else{
      this.showAddListing=false
    }
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['login'])

  }
}
