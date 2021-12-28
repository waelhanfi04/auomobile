import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-new-cars',
  templateUrl: './new-cars.component.html',
  styleUrls: ['./new-cars.component.css']
})
export class NewCarsComponent implements OnInit {
  
  @ViewChild('brandList') brandList: ElementRef | any;
  scrollright: boolean = true;
  scrollleft: boolean = true;
  scrollrightdisable: boolean = true;
  scrollleftdisable: boolean = false;
  userId=localStorage.getItem('idUser') as string;
  carsList:any;
  show :boolean =false;
  noData:boolean =false;
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }
  getCars(){
    this.carService.getAllCars().subscribe((data:any)=>{
      
      if(data!==null || data!==undefined)
      {
        //car?.type !=='neuf'
        this.carsList=data.voitures;
        if(this.carsList.length===0){
          this.noData=true
        }else{
          this.noData=false
        }


        this.carsList=  data.voitures.filter((car:any)=> 
        car.status ==='accepted' && car.type ==='Neuve'        )

      }
    })
  }
  getCarByBrand(brand:string){
    this.carService.getAllCars().subscribe((data:any)=>{
      
      if(data!==null || data!==undefined)
      {
        this.carsList=  data.voitures.filter((car:any)=> 
        car.status ==='accepted' && car.type ==='Neuve' && car.brand===brand        )
        if(this.carsList.length===0){
          this.noData=true
        }else{
          this.noData=false
        }


      }
    })
   // this.carsList= this.carsList.filter((car:any)=> car.brand===brand)
  }
  onImgError(event: any) {
    event.target.src = '../../../../assets/images/new-icons/default-car.jpg';
  }

  scrollRight(): void {
    this.brandList?.nativeElement.scrollTo({
      left: this.brandList.nativeElement.scrollLeft + 150,
      behavior: 'smooth'
    });
    this.scrollright = true;
    this.scrollrightdisable = false;

    if (
      this.brandList?.nativeElement.scrollLeft ===
      this.brandList?.nativeElement.scrollWidth -
        this.brandList?.nativeElement.clientWidth
    ) {
      this.scrollleft = false;
      this.scrollleftdisable = true;
    }
  }

  scrollLeft() {
    this.brandList.nativeElement.scrollLeft -= 150;
    this.scrollleft = true;
    this.scrollleftdisable = false;

    if (
      this.brandList?.nativeElement.scrollLeft === 0 ||
      this.brandList?.nativeElement.scrollLeft === 'false'
    ) {
      this.scrollright = false;
      this.scrollrightdisable = true;
    }
  }
}
