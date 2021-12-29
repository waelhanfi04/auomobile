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
      category: new FormControl(''),
    //  price: new FormControl(),
      city: new FormControl(''),
    })
   }

  ngOnInit(): void {
    this.getCars()
  }
  ngOnChanges(){
    this.filterForm.get('category')?.valueChanges.subscribe((value:any)=>{
      if(value!=='')
     { this.carsList= this.carsList.filter((car:any)=> car.category===value)
    }else{
        this.getCars();
      }
    });
    this.filterForm.get('city')?.valueChanges.subscribe((value:any)=>{
      if(value!=='')
    {  this.carsList= this.carsList.filter((car:any)=> car.city===value)
    }else{
        this.getCars();
      }
    });
      //  this.filterForm.get('price')?.valueChanges.subscribe((value:any)=>{
 //     console.log('priiiiice',value)
     // this.carsList = this.carsList.filter((car:any)=> car.price<value)
   // });
  }
  getCars(){
    this.carService.getAllCars().subscribe((data:any)=>{
      
      if(data!==null || data!==undefined)
      { 
        this.carsList=data.voitures;
        this.carsList=data.voitures.filter((car:any)=>
          car.status==='accepted'
        );
        this.carListLength=this.carsList.length;
        // data.voitures.forEach((car:any) => {
        //   if(car.user.type==='pro')
        //   this.sponsoredCarsList.push(car)
        // });
        this.sponsoredCarsList=  data.voitures.filter((car:any)=> 
        car?.user?.type !=='part' && car.status==='accepted'
        )
        console.log('spoooon',this.sponsoredCarsList)
      }
    })
  }
 
  getCarByBrand(brand:string){
    this.carService.getAllCars().subscribe((data:any)=>{
      
      if(data!==null || data!==undefined)
      {
        this.carsList=  data.voitures.filter((car:any)=> 
        car.status ==='accepted' && car.brand===brand        )
        // if(this.carsList.length===0){
        //   this.noData=true
        // }else{
        //   this.noData=false
        // }

      }
    })
  }
  onImgError(event: any) {
    event.target.src = '../../../../assets/images/new-icons/default-car.jpg';
  }
  addToFavorites(){
    
  }
 getCarByCategory(category:string){
  this.carService.getAllCars().subscribe((data:any)=>{
    if(data!==null || data!==undefined)
    {
      this.carsList=  data.voitures.filter((car:any)=> 
      car.status ==='accepted'  && car.category===category        )
      // if(this.carsList.length===0){
      //   this.noData=true
      // }else{
      //   this.noData=false
      // }

    }
  })
 // this.carsList= this.carsList.filter((car:any)=> car.category===category)
 }
}
