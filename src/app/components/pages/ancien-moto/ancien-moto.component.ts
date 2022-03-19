import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-ancien-moto',
  templateUrl: './ancien-moto.component.html',
  styleUrls: ['./ancien-moto.component.css']
})
export class AncienMotoComponent implements OnInit {
  motoList:any;
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getMotos();
  }
  getMotos(){
    this.carService.getAllCars().subscribe((data:any)=>{
      console.log('cars from home--> ',data)
      if(data!==null || data!==undefined)
      {
        // car?.type !=='occasions'
        this.motoList=data.voitures;
        this.motoList=  data.voitures.filter((car:any)=> 
        car.status ==='accepted' && car.type ==='Occasion' && car.category===20
        )
        this.motoList.forEach((element:any) => {
          element.brand = JSON.parse(element.brand)
          element.voitureOption = JSON.parse(element.voitureOption)
        });
      
      }
    })
  }
  onImgError(event: any) {
    event.target.src = '../../../../assets/images/new-icons/default-car.jpg';
  }
}
