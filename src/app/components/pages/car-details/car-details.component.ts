import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  picturesList:any=[]
  constructor(
    private route: ActivatedRoute,
    private carService: CarService
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params: any) => {
          console.log(params['id']);
          return params['id'];
        })
      )
      .subscribe((params) => this.getCarDetails(params));
  }
  getCarDetails(id: any) {
    this.carService.getOneCar(id).subscribe((data: any) => {
      console.log('dataaaaaaa', data)
      this.car = data.voiture;
      this.insideEquipmentList = data.voiture.insideEquipmentVoitures;
      this.outsideEquipmentList = data.voiture.outsideEquipmentVoitures;
      this.securityEquipmentList = data.voiture.securityEquipmentVoitures;
      this.picturesList=data.voiture.pictureVoitures;
    })
  }
}
