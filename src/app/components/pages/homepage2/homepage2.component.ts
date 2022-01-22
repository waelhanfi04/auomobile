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
      search: new FormControl(''),
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
        data.voitures.forEach((car:any) => {
          car.brand=JSON.parse(car.brand)
          car.voitureOption=JSON.parse(car.voitureOption)
        });
        if(localStorage.getItem('fav_store__')){
        let local:any =localStorage.getItem('fav_store__')
        var fav = JSON.parse(local)
        fav.forEach((element:any) => {
        data.voitures.forEach((car:any) => {
        
              if(car.id===element){
                car.favoris=true
              }else{  car.favoris=false}
          
        //    localStorage.getItem('fav_store__')
         
        });
      });
    }
        this.carsList=data.voitures;
      console.log("length",this.carsList);
        this.carListLength=this.carsList.length;
        this.carsList=data.voitures.filter((car:any)=>
          car.status==='accepted'
        );
  
        //console.log(' this.carsList', this.carsList)
        this.sponsoredCarsList=  data.voitures.filter((car:any)=> 
        car.type !=='Neuve' && car.status==='accepted'
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
  addToFavorites(id:any){
    var items:any = [];
    if(localStorage.getItem('fav_store__')){
      let local:any =localStorage.getItem('fav_store__')
      var fav = JSON.parse(local)
      fav.forEach((element:any) => {
        items.push(element);
      });
    
      const index = items.indexOf(id);
      if (index > -1) {
        console.log("exist")
        items.splice(index, 1);
      }
      else{
        items.push(id);
        console.log("n'existe pas");
      }      localStorage.setItem('fav_store__',JSON.stringify(items));
      console.log('fav111--------->',localStorage.getItem('fav_store__'))
    }else{
      items.push(id);
      localStorage.setItem('fav_store__',JSON.stringify(items));
      let local:any =localStorage.getItem('fav_store__')
      var fav = JSON.parse(local)
      console.log('fav--------->',fav)
    }
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
