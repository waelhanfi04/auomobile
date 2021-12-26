import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-gerer-annonce',
  templateUrl: './gerer-annonce.component.html',
  styleUrls: ['./gerer-annonce.component.css']
})
export class GererAnnonceComponent implements OnInit {
  carsList:any
  errorMsg = ''
  successMsg = ''
  constructor(private carService:CarService,private router: Router) { }
  ngOnInit(): void {
    this.getCars()
  }
  getCars(){
    this.carService.getAllCars().subscribe((data:any)=>{
      console.log('cars from home--> ',data)
      if(data!==null || data!==undefined)
      { 

        this.carsList=data.voitures
      }
    })
  }
  validationCar(id:any,type:any){
    this.carService.validateCar(id,type).subscribe((response:any)=>{
      console.log('responnnse after validation',response)
      if(response.message=== "car status was updated successfully!"){
        if(type==='accepted'){
          this.successMsg='Annonce a été accéptée avec succès!';
          setTimeout(() => {
            this.router.navigate(['/gerer-annonces'])
          }, 1000);
        }else{
          this.successMsg='Annonce a été rejectée avec succès!'
          setTimeout(() => {
            this.router.navigate(['/gerer-annonces'])
          }, 1000);
        }
      }
    })

  }
  deleteCar(id:any){
    this.carService.deleteCar(id).subscribe((data:any)=>{
      if(data.message === "voiture was deleted successfully!")
      this.successMsg='Annonce a été supprimée avec succès!'
      setTimeout(() => {
        this.router.navigate(['/gerer-annonces'])
      }, 1000);
    })
  }
}
