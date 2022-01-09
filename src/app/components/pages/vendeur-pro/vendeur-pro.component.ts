import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-vendeur-pro',
  templateUrl: './vendeur-pro.component.html',
  styleUrls: ['./vendeur-pro.component.css']
})
export class VendeurProComponent implements OnInit {
usersProList:any
  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getAllUsersPro();
  }
getAllUsersPro(){
  this.profileService.getAllProUsers().subscribe((response:any)=>{
    console.log('uesee pro',response)
    this.usersProList=response.users;
  })
}
onImgError(event: any) {
  event.target.src = '../../../../assets/images/concrete-wall-3.png';
}
}
