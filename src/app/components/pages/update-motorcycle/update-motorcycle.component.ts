import { Component, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CarService } from 'src/app/services/car/car.service';
import { Car } from '../../../models/car'
import { arrayInsideEquipment, arrayOutsideEquipment, arraysecurityEquipment, arrayCategoryCar, arrayCategories, arrayBrand } from 'src/app/shared/config';

@Component({
  selector: 'app-update-motorcycle',
  templateUrl: './update-motorcycle.component.html',
  styleUrls: ['./update-motorcycle.component.css']
})
export class UpdateMotorcycleComponent implements OnInit {

  updateMotoForm: FormGroup
  errorMsg = ''
  successMsg = ''
  isSubmitting: boolean = false
  years: any = []
  powerFiscalArray: any = []
  insideEquipmentList = arrayInsideEquipment
  outsideEquipmentList = arrayOutsideEquipment
  securityEquipmentList = arraysecurityEquipment
  categoriesList = arrayCategoryCar
  nameCategory:any
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
      // availablity: new FormControl(null),
      phone: new FormControl(null),
      city: new FormControl(null),
      brand: new FormControl(null),
      model: new FormControl(null),
      color: new FormControl(null),
      carrosserie: new FormControl(null),
      // guarantee: new FormControl(null),
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
      insideEquipment: this.fb.array([]),
      outsideEquipment: this.fb.array([]),
      securityEquipment: this.fb.array([]),
      pictures: this.fb.array([]),
      type: new FormControl('Occasion'),
      trim: new FormControl(null),
      generation: new FormControl(null),
      serie: new FormControl(null),
      numberDoors: new FormControl(null),
      seatingCapacity: new FormControl(null),
      puissanceDIN: new FormControl(null),
      permis: new FormControl(null) ,
      carburant: new FormControl(null),
      miseCirculation: new FormControl(null),
      cylinder: new FormControl(null),
    });

  }

  ngOnInit(): void {
    this.getBrands()
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
    /*---add list array of numbers form 4 to 48-- */
    for (let i = 4; i < 49; i++) {
      this.powerFiscalArray.push(i);
    }
    /*---Update lists-- */
    this.updateMotoForm.get('brand')?.valueChanges.subscribe((value: string) => {
      if( this.arrayBrand)
    {  this.arrayBrand.forEach((brand: any) => {
        if (brand.id_car_make.toString() === value) {
          this.nameBrand = { 'id': value, 'value': brand.name }
        }
      });
      this.carService.getModel(value).subscribe((data: any) => {
        this.arrayModel = data.car_model
      })}
    });
    this.updateMotoForm.get('model')?.valueChanges.subscribe((value: string) => {
      if (this.arrayModel) {
        this.arrayModel.forEach((model: any) => {
          if (model.id_car_model.toString() === value) {
            this.nameModel = { 'id': value, 'value': model.name }
          }
        });
        this.carService.getSerie(value,'moto').subscribe((data: any) => {
          this.arraySerie = data.car_serie
        })
      }
    });
    this.updateMotoForm.get('serie')?.valueChanges.subscribe((value: string) => {
      if (this.arraySerie) {
        this.arraySerie.forEach((serie: any) => {
          if (serie.id_car_serie.toString() === value) {
            this.nameSerie = { 'id': value, 'value': serie.name }
          }
        });
        this.carService.getTrim(value).subscribe((data: any) => {
          this.arrayTrim = data.car_trim
        })
      }
    });
    this.updateMotoForm.get('trim')?.valueChanges.subscribe((value: string) => {
      if (this.arrayTrim) {
        this.arrayTrim.forEach((trim: any) => {
          if (trim.id_car_trim.toString() === value) {
            this.nameTrim = { 'id': value, 'value': trim.name }
          }
        });
        this.carService.getSpecification(value).subscribe((data: any) => {
          this.arraySpecification = data.specifications
        })
      }
    });

  }

  getBrands() {
    this.nameCategory='20';
        this.carService.getMarque(this.nameCategory).subscribe((data: any) => {
      this.arrayBrand = data.car_make;
    })

  }
  getCarDetails(id: any) {
    this.carService.getOneCar(id).subscribe((data: any) => {
      if (data !== null && data !== undefined) {
        this.carDetails = data.voiture;
        this.carDetails.brand = JSON.parse(this.carDetails.brand)
        this.carDetails.voitureOption = JSON.parse(this.carDetails.voitureOption)
        this.voitureOption = this.carDetails.voitureOption;
        this.nameBrand = { 'id': this.carDetails.brand.id, 'value': this.carDetails.brand.value }
        this.nameModel = { 'id': this.carDetails.voitureOption.model.id, 'value': this.carDetails.voitureOption.model.value }
        this.nameTrim = { 'id': this.carDetails.voitureOption.trims.id, 'value': this.carDetails.voitureOption.trims.value }
        this.nameSerie = { 'id': this.carDetails.voitureOption.serie.id, 'value': this.carDetails.voitureOption.serie.value }
        if (this.carDetails.brand.id) {
          this.carService.getModel(this.carDetails.brand.id).subscribe((data: any) => {
            this.arrayModel = data.car_model
          });
        }

        if (this.carDetails.voitureOption.model.id) {
          this.carService.getSerie(this.carDetails.voitureOption.model.id,'moto').subscribe((data: any) => {
            this.arraySerie = data.car_serie
          });
        }
        if (this.carDetails.voitureOption.serie.id) {
          this.carService.getTrim(this.carDetails.voitureOption.serie.id).subscribe((data: any) => {
            this.arrayTrim = data.car_trim
          });
        }
        if (this.carDetails.voitureOption.trims.id) {
          this.carService.getSpecification(this.carDetails.voitureOption.trims.id).subscribe((data: any) => {
            this.arraySpecification = data.specifications
          });
        }
        /*  this.updateMotoForm.get('brand')?.setValue(this.carDetails.brand.id)
          this.updateMotoForm.get('model')?.setValue( this.carDetails.voitureOption.model.id)
          this.updateMotoForm.get('generation')?.setValue( this.carDetails.voitureOption.generation.id)
          this.updateMotoForm.get('serie')?.setValue( this.carDetails.voitureOption.serie.id)
  */
    
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
  
    let body = {
      id: this.carDetails.id,
      availablity: '',
      title: this.updateMotoForm.get('title')?.value,
      phone: this.updateMotoForm.get('phone')?.value,
      country: this.updateMotoForm.get('country')?.value,
      city: this.updateMotoForm.get('city')?.value,
      price: this.updateMotoForm.get('price')?.value,
      color: this.updateMotoForm.get('color')?.value,
      carrosserie: this.updateMotoForm.get('carrosserie')?.value,
      cylinder: this.updateMotoForm.get('cylinder')?.value,
      guarantee:'',
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
      insideEquipment: this.updateMotoForm.get('insideEquipment')?.value,
      outsideEquipment: this.updateMotoForm.get('outsideEquipment')?.value,
      securityEquipment: this.updateMotoForm.get('securityEquipment')?.value,
      numberDoors:this.updateMotoForm.get('numberDoors')?.value,
      seatingCapacity: this.updateMotoForm.get('seatingCapacity')?.value,
      puissanceDIN:this.updateMotoForm.get('puissanceDIN')?.value,
      permis:this.updateMotoForm.get('permis')?.value ,
      carburant:this.updateMotoForm.get('carburant')?.value,
      miseCirculation:this.updateMotoForm.get('miseCirculation')?.value,
      type: this.userRole === 'admin'? 'Neuve': 'Occasion',
      brand: JSON.stringify(this.nameBrand),
      model: this.nameModel,
      trims: this.nameTrim,
      generation: null,
      serie: this.nameSerie
    }

    this.carService.updateCar(body).subscribe((response: any) => {
      if (response.message === 'voiture was registered successfully!') {
        this.successMsg = 'Voiture a ??t?? modifi?? avec succ??s!'
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
