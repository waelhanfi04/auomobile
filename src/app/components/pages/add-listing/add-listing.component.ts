import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { arrayInsideEquipment,arrayOutsideEquipment,arraysecurityEquipment,arrayCategoryCar, arrayCategories, arrayBrand  } from 'src/app/shared/config';
@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  addCarForm: FormGroup;
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  step4: boolean = false;
  errorMsg = '';
  successMsg = '';
  isSubmitting: boolean = false;
  years: any = []
  powerFiscalArray:any=[]
  insideEquipmentList=arrayInsideEquipment; 
  outsideEquipmentList=arrayOutsideEquipment;
  securityEquipmentList=arraysecurityEquipment;
  categoriesList=arrayCategoryCar;
  arrayBrand=arrayBrand;
  constructor(private router: Router) {
    this.addCarForm = new FormGroup({
      title: new FormControl(''),
      availablity: new FormControl(''),
      phone: new FormControl(''),
      city: new FormControl(''),
      brand: new FormControl(''),
      model: new FormControl(''),
      color: new FormControl(''),
      carrosserie: new FormControl(''),
      guarantee: new FormControl(''),
      month: new FormControl(''),
      year: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      pictures: new FormControl(''),
      address: new FormControl(''),
      motorization: new FormControl(''),
      mileage: new FormControl(''),
      energy: new FormControl(''),
      transmission: new FormControl(''),
      powerFiscal: new FormControl(''),
      gearbox: new FormControl(''),
      insideEquipment: new FormControl(''),
      outsideEquipment: new FormControl(''),
      securityEquipment: new FormControl(''),
      seatingCapacity: new FormControl(''),
      numberDoors: new FormControl(''),
    });

  }
/*
  title
  availablity
  phone
  country
  city
  brand
  model
  price
  color
  carrosserie
  guarantee
  month
  year
  category
  pictures
  address
  motorization
  mileage
  energy
  transmission
  powerFiscal
  gearbox
  description
  seatingCapacity
  numberDoors
   insideEquipment
  outsideEquipment
  securityEquipment
  */
  ngOnInit(): void {
    var aujd = new Date();
    const currentYear = aujd.getFullYear();

    for (let year = 1900; year < currentYear + 1; year++) {
      this.years.push(year);
    }

    for (let i =4; i < 49; i++) {
      this.powerFiscalArray.push(i);
    }
  }

}
