import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../../services/profile/profile.service'
@Component({
  selector: 'app-gerer-comptes',
  templateUrl: './gerer-comptes.component.html',
  styleUrls: ['./gerer-comptes.component.css']
})
export class GererComptesComponent implements OnInit {
  successMsg = '';
  errorMsg = '';
  isSubmitting: boolean = false;
  userList:any
  constructor(private router: Router, private ProfileService: ProfileService) { }
  ngOnInit(): void {
    this.getUserList()
  }
  getUserList() {
    this.ProfileService.getAllUsers().subscribe((data: any) => {
      console.log('dataa userList-->', data)
      this.userList = data.users
    })
  }
  blockUser(id:any){
    this.ProfileService.blockUser(id).subscribe((data: any) => {
      console.log('blockeed', data)
      if(data.message === "user was blocked successfully!"){
        this.ngOnInit();
      }
    //    this.router.navigate([''])
    })
  }
}
