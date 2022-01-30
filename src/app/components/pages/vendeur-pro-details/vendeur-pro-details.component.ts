import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
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
  idUser:any
  constructor(private carService:CarService,private profileService:ProfileService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .pipe(
      map((params: any) => {
        this.idUser=params['id'];
        return params['id'];
      })
    )
    .subscribe((params) => this.getUserDetails(this.idUser));
  }
  getUserDetails(id:any) {
    console.log("d'accord")
    this.profileService.getDetailsUserPro(id).subscribe((data: any) => {
 this.user = data.user
 this.carsList=data.voitures;
 this.carsList=  data.voitures.filter((car:any)=> 
 car.status ==='accepted' && car.type ==='Occasion'
 )
 for(let i=0;i<this.carsList.length;i++){
  let obj:any;
  eval("obj = " + this.carsList[i].brand);
  this.carsList[i].brand=obj?.value;
 }


    })
  }

  onImgError(event: any) {
    event.target.src = '../../../../assets/images/new-icons/default-car.jpg';
  }

}
