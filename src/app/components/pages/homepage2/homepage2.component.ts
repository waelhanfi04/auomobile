import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CarService } from 'src/app/services/car/car.service';
import { arrayCategoryCar } from 'src/app/shared/config';

@Component({
  selector: 'app-homepage2',
  templateUrl: './homepage2.component.html',
  styleUrls: ['./homepage2.component.css']
})
export class Homepage2Component implements OnInit {
carsList:any
carListLength:number=0
categoriesList=arrayCategoryCar
searchData: string =''
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars()
  }
  getCars(){
    this.carService.getAllCars().subscribe((data:any)=>{
      console.log('car',data)
      if(data!==null || data!==undefined)
      {
        this.carsList=data.voitures;
        this.carListLength=this.carsList.length;
      }
    })
  }
  onImgError(event: any) {
    event.target.src = '../../../../assets/images/new-icons/default-car.jpg';
  }
  addToFavorites(){
    
  }
}
