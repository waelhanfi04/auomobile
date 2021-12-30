import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car/car.service';
@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  carsList:any;
  constructor(private carService:CarService) { }

  ngOnInit(): void {
   // this.getCars();
   this.getFavoris()
  }
  getFavoris(){
    let items:any=[]
    if(localStorage.getItem('fav_store__')){
      let local:any =localStorage.getItem('fav_store__')
      var fav = JSON.parse(local)
      fav.forEach((element:any) => {
        this.carService.getOneCar(element).subscribe((response:any)=>{
       items.push(response.voiture)
        })
      })
      this.carsList=items
    }
  }
  getCars(){
    this.carService.getAllCars().subscribe((data:any)=>{
      console.log('cars from home--> ',data)
      if(data!==null || data!==undefined)
      {
        // car?.type !=='occasions'
        this.carsList=data.voitures;
        this.carsList=  data.voitures.filter((car:any)=> 
        car.status ==='accepted' && car.type ==='Occasion'
        )

      }
    })
  }
  onImgError(event: any) {
    event.target.src = '../../../../assets/images/new-icons/default-car.jpg';
  }
}
