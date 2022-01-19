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
        this.carsList.forEach((car:any) => {
          car.brand=JSON.parse(car.brand)
          car.voitureOption=JSON.parse(car.voitureOption)
        });
      }
    })
  }
  validationCar(id:any,type:any){
    this.carService.validateCar(id,type).subscribe((response:any)=>{
      console.log('responnnse after validation',response)
      if(response.message=== "car status was updated successfully!"){
        if(type==='accepted'){
          this.successMsg='Annonce a été accéptée avec succès!';
          this.ngOnInit();
          setTimeout(() => {
            this.successMsg=''
            // this.router.navigate(['/gerer-annonces'])
            // this.ngOnInit();
          }, 1000);
        }else{
          this.successMsg='Annonce a été rejectée avec succès!'
          this.ngOnInit();
          setTimeout(() => {
            this.successMsg=''
            this.router.navigate(['/gerer-annonces']);
            this.ngOnInit();
          }, 1000);
        }
      }
    })

  }
  deleteCar(id:any){
    this.carService.deleteCar(id).subscribe((data:any)=>{
      if(data.message === "voiture was deleted successfully!")
      this.successMsg='Annonce a été supprimée avec succès!';
      this.ngOnInit();
      setTimeout(() => {
        this.successMsg=''
        this.router.navigate(['/gerer-annonces']);
        this.ngOnInit();
      }, 1000);
    })
  }
  onImgError(event: any) {
    event.target.src = '../../../../assets/images/new-icons/default-car.jpg';
  }
}
