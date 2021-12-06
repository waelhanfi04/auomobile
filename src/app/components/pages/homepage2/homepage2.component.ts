import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
sponsoredCarsList:any
carListLength:number=0
categoriesList=arrayCategoryCar
searchData: string =''
userId=localStorage.getItem('idUser') as string;
filterForm:FormGroup
  constructor(private carService:CarService) {
    this.filterForm = new FormGroup({
      category: new FormControl(),
    //  price: new FormControl(),
      city: new FormControl(),
    })
   }

  ngOnInit(): void {
    this.getCars()
    this.filterForm.get('category')?.valueChanges.subscribe((value:any)=>{
      this.getCars()
      console.log('vaeeel',value)
      this.carsList= this.carsList.filter((car:any)=> car.category===value)
    });
    this.filterForm.get('city')?.valueChanges.subscribe((value:any)=>{
      this.getCars()
      console.log('vaeeel',value)
      this.carsList= this.carsList.filter((car:any)=> car.city===value)
    });
  //  this.filterForm.get('price')?.valueChanges.subscribe((value:any)=>{
 //     console.log('priiiiice',value)
     // this.carsList = this.carsList.filter((car:any)=> car.price<value)
   // });
  }
  getCars(){
    this.carService.getAllCars().subscribe((data:any)=>{
      console.log('cars from home--> ',data)
      if(data!==null || data!==undefined)
      {
        this.carsList=data.voitures;
        this.carListLength=this.carsList.length;
        // data.voitures.forEach((car:any) => {
        //   if(car.user.type==='pro')
        //   this.sponsoredCarsList.push(car)
        // });
        this.sponsoredCarsList=  data.voitures.filter((car:any)=> 
        car?.user?.type ==='part'
        )
        console.log('spoooon',this.sponsoredCarsList)
      }
    })
  }
  getCarByBrand(brand:string){
    this.carsList= this.carsList.filter((car:any)=> car.brand===brand)
  }
  onImgError(event: any) {
    event.target.src = '../../../../assets/images/new-icons/default-car.jpg';
  }
  addToFavorites(){
    
  }
 getCarByCategory(category:string){
  this.carsList= this.carsList.filter((car:any)=> car.category===category)
 }
}
