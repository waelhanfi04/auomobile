import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-creer-annonce',
  templateUrl: './creer-annonce.component.html',
  styleUrls: ['./creer-annonce.component.css']
})
export class CreerAnnonceComponent implements OnInit {
  categoriesList:any
  constructor(private router: Router, private carService: CarService) { }

  ngOnInit(): void {
  }
  getCategory() {
    this.carService.getCategory().subscribe((data: any) => {
      this.categoriesList = data.car_type;
    })

  }
  onCheckboxChange(checkbox:any,type:any) {
    if (checkbox.target.checked) {
      if(type === 'car'){
        setTimeout(() => {
          this.router.navigate(['/creer-une-annonce/voiture'])
        }, 1000);
       
      }else{
        setTimeout(() => {
          this.router.navigate(['creer-une-annonce/moto'])
        }, 1000);
      
      }
    }
  }

}
