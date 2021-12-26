import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-new-cars',
  templateUrl: './new-cars.component.html',
  styleUrls: ['./new-cars.component.css']
})
export class NewCarsComponent implements OnInit {
  userId=localStorage.getItem('idUser') as string;
  carsList:any;
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }
  getCars(){
    this.carService.getAllCars().subscribe((data:any)=>{
      console.log('cars from home--> ',data)
      if(data!==null || data!==undefined)
      {
        //car?.type !=='neuf'
        this.carsList=data.voitures;
        this.carsList=  data.voitures.filter((car:any)=> 
        car.status ==='accepted'        )

      }
    })
  }
  onImgError(event: any) {
    event.target.src = '../../../../assets/images/new-icons/default-car.jpg';
  }
}
