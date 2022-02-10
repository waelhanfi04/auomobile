import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CarService } from 'src/app/services/car/car.service';
import { arrayInsideEquipment, arrayOutsideEquipment, arraysecurityEquipment } from 'src/app/shared/config';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  car: any
  insideEquipmentList: any = []
  outsideEquipmentList: any = []
  securityEquipmentList: any = []
  picturesList: any = []
  idCar: any;
  isOwner: boolean = false;
  arraySpecification: any
  isNautismeOrPiece: boolean = false
  category = ''
  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params: any) => {
          this.idCar = params['id'];
          return params['id'];
        })
      )
      .subscribe((params) => this.getCarDetails(params));
  }
  getCarDetails(id: any) {
    this.carService.getOneCar(id).subscribe((data: any) => {
      this.car = data.voiture;
      if (data.voiture.category !== 1 && data.voiture.category !== 20) {
        this.isNautismeOrPiece = true
        if (data.voiture.category === 2) { this.category = 'Nautisme' } else {this.category = 'Pièces automobile' }
      }
      this.car.brand = JSON.parse(this.car.brand)
      this.car.voitureOption = JSON.parse(this.car.voitureOption)
      if (this.car.voitureOption.trims.id) {
        this.carService.getSpecification(this.car.voitureOption.trims.id).subscribe((data: any) => {
          this.arraySpecification = data.specifications
        });
      }
      this.insideEquipmentList = data.voiture.insideEquipmentVoitures;
      this.outsideEquipmentList = data.voiture.outsideEquipmentVoitures;
      this.securityEquipmentList = data.voiture.securityEquipmentVoitures;
      this.picturesList = data.voiture.pictureVoitures;
      if (this.car.userId === localStorage.getItem('idUser')) {
        this.isOwner = true;
      } else {
        this.isOwner = false;
      }
    })
  }
  deleteCar() {
    this.carService.deleteCar(this.idCar).subscribe((data: any) => {
      if (data.message === "voiture was deleted successfully!")
        this.router.navigate([''])
    })
  }
  onImgError(event: any) {
    event.target.src = '../../../../assets/images/new-icons/default-car.jpg';
  }

  addToFavorites(id: any) {
    var items: any = [];
    if (localStorage.getItem('fav_store__')) {
      let local: any = localStorage.getItem('fav_store__')
      var fav = JSON.parse(local)
      fav.forEach((element: any) => {
        items.push(element);
      });

      const index = items.indexOf(id);
      if (index > -1) {
        console.log("exist")
        items.splice(index, 1);
      }
      else {
        items.push(id);
        console.log("n'existe pas");
      } localStorage.setItem('fav_store__', JSON.stringify(items));
      console.log('fav111--------->', localStorage.getItem('fav_store__'))
    } else {
      items.push(id);
      localStorage.setItem('fav_store__', JSON.stringify(items));
      let local: any = localStorage.getItem('fav_store__')
      var fav = JSON.parse(local)
      console.log('fav--------->', fav)
    }
  }

}
