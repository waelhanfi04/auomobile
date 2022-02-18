import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car/car.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-car-by-model',
  templateUrl: './car-by-model.component.html',
  styleUrls: ['./car-by-model.component.css']
})
export class CarByModelComponent implements OnInit {
  model:any;
  carsList:any;
  carsPrice:any;
  noData:any;
  constructor(private carService:CarService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .pipe(
      map((params: any) => {
        this.model=params['model']
        return params['model'];
      })
    )
    .subscribe((params) => this.getCars(params));
  }
  getCars(brand:any){
    this.carService.getAllCars().subscribe((data:any)=>{
      if(data!==null || data!==undefined)
      {
       
        this.carsList=  data.voitures.filter((car:any)=> {
          let objbrand:any;
          let objOption:any;
          eval("objbrand = " + car.brand);
          eval("objOption = " + car.voitureOption);
          car.model=objOption.model.value;
          car.serie=objOption.serie.value;
          if(car.status ==='accepted' && car.type ==='Neuve' && objbrand?.value===brand)
          this.carsPrice.push(car.price);
         return car.status ==='accepted' && car.type ==='Neuve' && objbrand?.value===brand
        }
        )
        if(this.carsList.length===0){
          this.noData=true
        }else{
          this.noData=false;
        }
        
        console.log(this.carsPrice)
        // this.min = Math.min( ...this.carsList )
        // console.log(this.carsList)
      }
    })
  }
}
