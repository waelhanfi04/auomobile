import { Component, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CarService } from 'src/app/services/car/car.service';
import { Car } from '../../../models/car'
import { arrayInsideEquipment, arrayOutsideEquipment, arraysecurityEquipment, arrayCategoryCar, arrayCategories, arrayBrand } from 'src/app/shared/config';
@Component({
  selector: '.update-car.component',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
  updateCarForm: FormGroup
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
  arrayGeneration: any
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
    this.updateCarForm = new FormGroup({
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
      category: new FormControl('1'),
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
      miseCirculation: new FormControl(null)
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
    this.updateCarForm.get('brand')?.valueChanges.subscribe((value: string) => {
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
    this.updateCarForm.get('model')?.valueChanges.subscribe((value: string) => {
      if (this.arrayModel) {
        this.arrayModel.forEach((model: any) => {
          if (model.id_car_model.toString() === value) {
            this.nameModel = { 'id': value, 'value': model.name }
          }
        });
        this.carService.getGeneration(value).subscribe((data: any) => {
          this.arrayGeneration = data.car_generation
        })
      }
    });
    this.updateCarForm.get('generation')?.valueChanges.subscribe((value: string) => {

      if (this.arrayGeneration) {
        this.arrayGeneration.forEach((generation: any) => {
          if (generation.id_car_generation.toString() === value) {
            this.nameGeneration = { 'id': value, 'value': generation.name }
          }
        });
        this.carService.getSerie(value,'voiture').subscribe((data: any) => {
          this.arraySerie = data.car_serie
        })
      }
    });
    this.updateCarForm.get('serie')?.valueChanges.subscribe((value: string) => {
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
    this.updateCarForm.get('trim')?.valueChanges.subscribe((value: string) => {
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
    this.nameCategory='1';
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
        this.nameGeneration = { 'id': this.carDetails.voitureOption.generation.id, 'value': this.carDetails.voitureOption.generation.value }
        if (this.carDetails.brand.id) {
          this.carService.getModel(this.carDetails.brand.id).subscribe((data: any) => {
            this.arrayModel = data.car_model
          });
        }
        if (this.carDetails.voitureOption.model.id) {
          this.carService.getGeneration(this.carDetails.voitureOption.model.id).subscribe((data: any) => {
            this.arrayGeneration = data.car_generation
          });
        }
        if (this.carDetails.voitureOption.generation.id) {
          this.carService.getSerie(this.carDetails.voitureOption.generation.id,'voiture').subscribe((data: any) => {
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
        /*  this.updateCarForm.get('brand')?.setValue(this.carDetails.brand.id)
          this.updateCarForm.get('model')?.setValue( this.carDetails.voitureOption.model.id)
          this.updateCarForm.get('generation')?.setValue( this.carDetails.voitureOption.generation.id)
          this.updateCarForm.get('serie')?.setValue( this.carDetails.voitureOption.serie.id)
  */
        const outsideEquipmentArray: FormArray = this.updateCarForm.get('outsideEquipment') as FormArray;
        this.carDetails.outsideEquipmentVoitures.forEach((itemEquip: any) => {
          outsideEquipmentArray.push(new FormControl(itemEquip.equipment));
          this.outsideEquipmentList.forEach((itemList: any) => {
            if (itemEquip.equipment === itemList.equipement) {
              itemList['checked'] = true;
            }
          });
        });

        const securityEquipmentArray: FormArray = this.updateCarForm.get('securityEquipment') as FormArray;
        this.carDetails.securityEquipmentVoitures.forEach((itemEquip: any) => {
          securityEquipmentArray.push(new FormControl(itemEquip.equipment));
          this.securityEquipmentList.forEach((itemList: any) => {
            if (itemEquip.equipment === itemList.equipement) {
              itemList['checked'] = true;
            }
          });
        });
        const insideEquipmentArray: FormArray = this.updateCarForm.get('insideEquipment') as FormArray;
        this.carDetails.insideEquipmentVoitures.forEach((itemEquip: any) => {
          insideEquipmentArray.push(new FormControl(itemEquip.equipment));
          this.insideEquipmentList.forEach((itemList: any) => {
            if (itemEquip.equipment === itemList.equipement) {
              itemList['checked'] = true;
            }
          });
        });
        const pictureArray: FormArray = this.updateCarForm.get('pictures') as FormArray;
        this.carDetails.pictureVoitures.forEach((element: any) => {
          pictureArray.push(new FormControl(element.picture));
        });
        this.kits = this.updateCarForm.get('pictures')?.value;
      }

    })
  }
  onCheckboxChange(e: any, controlName: any) {
    const checkArray: FormArray = this.updateCarForm.get(controlName) as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  delete(index: any) {
    const checkArray: FormArray = this.updateCarForm.get('pictures') as FormArray;
    checkArray.removeAt(index);
    this.kits = this.updateCarForm.get('pictures')?.value
  }
  updateCar() {
  
    let body = {
      id: this.carDetails.id,
       availablity: '',
      title: this.updateCarForm.get('title')?.value,
      phone: this.updateCarForm.get('phone')?.value,
      country: this.updateCarForm.get('country')?.value,
      city: this.updateCarForm.get('city')?.value,
      price: this.updateCarForm.get('price')?.value,
      color: this.updateCarForm.get('color')?.value,
      carrosserie: this.updateCarForm.get('carrosserie')?.value,
       guarantee: '',
      year: this.updateCarForm.get('year')?.value,
      category: this.updateCarForm.get('category')?.value,
      pictures: this.updateCarForm.get('pictures')?.value,
      address: this.updateCarForm.get('address')?.value,
      motorization: this.updateCarForm.get('motorization')?.value,
      mileage: this.userRole === 'admin' ? 0 : this.updateCarForm.get('mileage')?.value,
      energy: this.updateCarForm.get('energy')?.value,
      transmission: this.updateCarForm.get('transmission')?.value,
      powerFiscal: this.updateCarForm.get('powerFiscal')?.value,
      gearbox: this.updateCarForm.get('gearbox')?.value,
      description: this.updateCarForm.get('description')?.value,
      insideEquipment: this.updateCarForm.get('insideEquipment')?.value,
      outsideEquipment: this.updateCarForm.get('outsideEquipment')?.value,
      securityEquipment: this.updateCarForm.get('securityEquipment')?.value,
      numberDoors:this.updateCarForm.get('numberDoors')?.value,
      seatingCapacity:this.updateCarForm.get('seatingCapacity')?.value,
      puissanceDIN:this.updateCarForm.get('puissanceDIN')?.value,
      permis:this.updateCarForm.get('permis')?.value ,
      carburant:this.updateCarForm.get('carburant')?.value,
      miseCirculation:this.updateCarForm.get('miseCirculation')?.value,
      type: this.userRole === 'admin'? 'Neuve': 'Occasion',
      brand: JSON.stringify(this.nameBrand),
      model: this.nameModel,
      trims: this.nameTrim,
      generation: this.nameGeneration,
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
          const picArray: FormArray = this.updateCarForm.get('pictures') as FormArray;
          picArray.push(new FormControl(fileKit));
          this.kits = this.updateCarForm.get('pictures')?.value
        }
      }
      else {
        this.isAcceptedImageFileType = false;
      }
    }
  }

}
