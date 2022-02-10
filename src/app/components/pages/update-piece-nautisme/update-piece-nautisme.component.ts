import { Component, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CarService } from 'src/app/services/car/car.service';
import { Car } from '../../../models/car'
import { arrayEtatVelo, arrayTypeVelo, arrayCategoryCar, arrayCategories, arrayPiecesMarque, arrayNautismeMarque } from 'src/app/shared/config';

@Component({
  selector: 'app-update-piece-nautisme',
  templateUrl: './update-piece-nautisme.component.html',
  styleUrls: ['./update-piece-nautisme.component.css']
})
export class UpdatePieceNautismeComponent implements OnInit {
  arrayPiecesMarque = arrayPiecesMarque
  arrayNautismeMarque = arrayNautismeMarque
  updateMotoForm: FormGroup
  errorMsg = ''
  successMsg = ''
  isSubmitting: boolean = false
  years: any = []
  categoriesList = arrayCategoryCar
  nameCategory: any
  arrayBrand: any
  nameBrand: any;
  arrayModel: any
  nameModel: any;
  arrayTrim: any
  nameTrim: any;
  nameGeneration: any;
  arraySpecification: any
  arraySerie: any
  nameSerie: any;
  kits = []
  isAcceptedImageFileType: boolean = true
  carDetails: any;
  userRole: any
  voitureOption: any;
  constructor(private router: Router, private fb: FormBuilder, private carService: CarService, private route: ActivatedRoute) {
    this.updateMotoForm = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null),
      availablity: new FormControl(null),
      phone: new FormControl(null),
      city: new FormControl(null),
      brand: new FormControl(null),
      model: new FormControl(null),
      color: new FormControl(null),
      carrosserie: new FormControl(null),
      guarantee: new FormControl(null),
      year: new FormControl(null),
      category: new FormControl('20'),
      price: new FormControl(null),
      description: new FormControl(null),
      address: new FormControl(null),
      motorization: new FormControl(null),
      mileage: new FormControl(null),
      energy: new FormControl(null),
      transmission: new FormControl(null),
      powerFiscal: new FormControl(null),
      gearbox: new FormControl(null),
      insideEquipment: new FormControl([]),
      outsideEquipment: new FormControl([]),
      securityEquipment: new FormControl([]),
      pictures: this.fb.array([]),
      type: new FormControl('Occasion'),
      trim: new FormControl(null),
      generation: new FormControl(null),
      serie: new FormControl(null),
      numberDoors: new FormControl(null),
      seatingCapacity: new FormControl(null),
      puissanceDIN: new FormControl(null),
      permis: new FormControl(null),
      carburant: new FormControl(null),
      miseCirculation: new FormControl(null)
    });

  }

  ngOnInit(): void {

    this.userRole = localStorage.getItem('role')

    this.route.params
      .pipe(
        map((params: any) => {
          return params['id'];
        })
      )
      .subscribe((params) => this.getCarDetails(params));
    /*---add list of years from 1900 to current year-- */
    var aujd = new Date();
    const currentYear = aujd.getFullYear();
    for (let year = 1900; year < currentYear + 1; year++) {
      this.years.push(year);
    }

    /*---Update lists-- */
    this.updateMotoForm.get('brand')?.valueChanges.subscribe((value: string) => {
      this.updateMotoForm.get('model')?.setValue('')
      this.arrayModel = []
      arrayPiecesMarque.map((b: any) => {
        if (b.brand === value) {
          this.arrayModel = b.model
        }
      })
    });

  }


  getCarDetails(id: any) {
    this.carService.getOneCar(id).subscribe((data: any) => {
      if (data !== null && data !== undefined) {
        this.carDetails = data.voiture;
        this.carDetails.brand = JSON.parse(this.carDetails.brand)
        this.carDetails.voitureOption = JSON.parse(this.carDetails.voitureOption)
        this.voitureOption = this.carDetails.voitureOption;
       
        if (data.voiture.category === '2') {
       
          this.arrayBrand = arrayNautismeMarque
        } else if (data.voiture.category === '3') {
          this.arrayBrand = arrayPiecesMarque
        }
        this.arrayBrand.map((b: any) => {
          if (b.brand === this.carDetails.brand.value) {
            console.log('mod',b.model)
            this.arrayModel = b.model
          }
        })
    
        const pictureArray: FormArray = this.updateMotoForm.get('pictures') as FormArray;
        this.carDetails.pictureVoitures.forEach((element: any) => {
          pictureArray.push(new FormControl(element.picture));
        });
        this.kits = this.updateMotoForm.get('pictures')?.value;
      }

    })
  }

  delete(index: any) {
    const checkArray: FormArray = this.updateMotoForm.get('pictures') as FormArray;
    checkArray.removeAt(index);
    this.kits = this.updateMotoForm.get('pictures')?.value
  }
  updateCar() {
    let brand = { 'id': this.updateMotoForm.get('brand')?.value, 'value': this.updateMotoForm.get('brand')?.value }
    let model = { 'id': this.updateMotoForm.get('model')?.value, 'value': this.updateMotoForm.get('model')?.value }
    let obj = { 'id': '', 'value': '' }
    let body = {
      id: this.carDetails.id,
      availablity: this.updateMotoForm.get('availablity')?.value,
      title: this.updateMotoForm.get('title')?.value,
      phone: this.updateMotoForm.get('phone')?.value,
      country: this.updateMotoForm.get('country')?.value,
      city: this.updateMotoForm.get('city')?.value,
      price: this.updateMotoForm.get('price')?.value,
      color: this.updateMotoForm.get('color')?.value,
      carrosserie: this.updateMotoForm.get('carrosserie')?.value,
      guarantee: this.updateMotoForm.get('guarantee')?.value,
      year: this.updateMotoForm.get('year')?.value,
      category: this.nameGeneration,
      pictures: this.updateMotoForm.get('pictures')?.value,
      address: this.updateMotoForm.get('address')?.value,
      motorization: this.updateMotoForm.get('motorization')?.value,
      mileage: this.userRole === 'admin' ? 0 : this.updateMotoForm.get('mileage')?.value,
      energy: this.updateMotoForm.get('energy')?.value,
      transmission: this.updateMotoForm.get('transmission')?.value,
      powerFiscal: this.updateMotoForm.get('powerFiscal')?.value,
      gearbox: this.updateMotoForm.get('gearbox')?.value,
      description: this.updateMotoForm.get('description')?.value,
      numberDoors: this.updateMotoForm.get('numberDoors')?.value,
      seatingCapacity: this.updateMotoForm.get('seatingCapacity')?.value,
      puissanceDIN: this.updateMotoForm.get('puissanceDIN')?.value,
      permis: this.updateMotoForm.get('permis')?.value,
      carburant: this.updateMotoForm.get('carburant')?.value,
      miseCirculation: this.updateMotoForm.get('miseCirculation')?.value,
      type: this.userRole === 'admin' ? 'Neuve' : 'Occasion',
      insideEquipment: [],
      outsideEquipment: [],
      securityEquipment: [],
      brand: JSON.stringify(brand),
      model: model,
      trims: obj,
      generation: obj,
      serie: obj
    }

    this.carService.updateCar(body).subscribe((response: any) => {
      if (response.message === 'voiture was registered successfully!') {
        this.successMsg = 'Voiture a été modifié avec succès!'
        setTimeout(() => {
          this.router.navigate(['/details-annonce', this.carDetails.id])
        }, 1000);
      }
    })
  }
  onFileChange(e: any) {

    if (
      e.target.files[0].type == "image/png" ||
      e.target.files[0].type == "image/jpeg" ||
      e.target.files[0].type == "image/jpg"
    ) {

      this.isAcceptedImageFileType = true;
      var file = e.target.files[0];
      var r = new FileReader();
      if (e.target.files[0]) {
        r.readAsDataURL(file);
        r.onload = () => {
          let selectedFilename = file.name;
          const fileKit = r.result
          const picArray: FormArray = this.updateMotoForm.get('pictures') as FormArray;
          picArray.push(new FormControl(fileKit));
          this.kits = this.updateMotoForm.get('pictures')?.value
        }
      }
      else {
        this.isAcceptedImageFileType = false;
      }
    }
  }


}
