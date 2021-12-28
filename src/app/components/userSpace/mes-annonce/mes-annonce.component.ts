import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-mes-annonce',
  templateUrl: './mes-annonce.component.html',
  styleUrls: ['./mes-annonce.component.css']
})
export class MesAnnonceComponent implements OnInit {
  carsList:any
  errorMsg = ''
  successMsg = ''
  noData:boolean=false;
  userId=localStorage.get('userId')
  constructor(private carService:CarService,private router: Router) { }
  ngOnInit(): void {
    this.getCars()
  }
  getCars(){
    this.carService.getUserCars().subscribe((data:any)=>{
      console.log('cars from home--> ',data)
      if(data!==null || data!==undefined)
      { 
        this.carsList=data.voitures
      }
    })
  }

  deleteCar(id:any){
    this.carService.deleteCar(id).subscribe((data:any)=>{
      if(data.message === "voiture was deleted successfully!")
      this.successMsg='Annonce a été supprimée avec succès!'
      setTimeout(() => {
        this.router.navigate(['/mes-annonces'])
      }, 1000);
    })
  }
  onImgError(event: any) {
    event.target.src = '../../../../assets/images/new-icons/default-car.jpg';
  }

}
