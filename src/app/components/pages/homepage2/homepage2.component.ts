import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-homepage2',
  templateUrl: './homepage2.component.html',
  styleUrls: ['./homepage2.component.css']
})
export class Homepage2Component implements OnInit {
carsList:any
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars()
  }
  getCars(){
    this.carService.getAllCars().subscribe((data:any)=>{
      console.log('car',data)
      if(data!==null || data!==undefined)this.carsList=data.voitures
    })
    // this.carService.getAllCars().pipe(
    //   map((data:any)=> data.voitrues)
    //   .subscribe()
    // )
  }
  onImgError(event: any) {
    event.target.src = '../../../assets/images/new-icons/default-car.jpg';
  }
}
