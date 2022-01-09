import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car/car.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-vendeur-pro-details',
  templateUrl: './vendeur-pro-details.component.html',
  styleUrls: ['./vendeur-pro-details.component.css']
})
export class VendeurProDetailsComponent implements OnInit {
  carsList:any;
  user:any
  constructor(private carService:CarService,private profileService:ProfileService) { }

  ngOnInit(): void {
    this.getCars();
    this.getUserDetails();
  }
  getUserDetails() {
    this.profileService.userDetails().subscribe((data: any) => {
      console.log('dataa user', data.user)
      this.user = data.user
    })
  }
  getCars(){
    this.carService.getAllCars().subscribe((data:any)=>{
      console.log('cars from home--> ',data)
      if(data!==null || data!==undefined)
      {
        // car?.type !=='occasions'
        this.carsList=data.voitures;
        this.carsList=  data.voitures.filter((car:any)=> 
        car.status ==='accepted' && car.type ==='Occasion'
        )

      }
    })
  }
  onImgError(event: any) {
    event.target.src = '../../../../assets/images/new-icons/default-car.jpg';
  }

}
