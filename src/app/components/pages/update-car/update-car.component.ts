import { Component, OnInit } from '@angular/core';
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
  arrayBrand: any
  nameBrand: string = ''
  arrayModel: any
  nameModel: string = ''
  arrayTrim: any
  nameTrim: string = ''
  arrayGeneration: any
  nameGeneration: string = ''
  arraySpecification: any
  arraySerie: any
  nameSerie: string = ''
  kits = []
  isAcceptedImageFileType: boolean = true
  carDetails: any;
  userRole: any
  constructor(private router: Router, private fb: FormBuilder, private carService: CarService, private route: ActivatedRoute) {
    this.updateCarForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      availablity: new FormControl(''),
      phone: new FormControl(''),
      city: new FormControl(''),
      brand: new FormControl(''),
      model: new FormControl(''),
      color: new FormControl(''),
      carrosserie: new FormControl(''),
      guarantee: new FormControl(''),
      // month: new FormControl(''),
      year: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      address: new FormControl(''),
      motorization: new FormControl(''),
      mileage: new FormControl(''),
      energy: new FormControl(''),
      transmission: new FormControl(''),
      powerFiscal: new FormControl(''),
      gearbox: new FormControl(''),
      insideEquipment: this.fb.array([]),
      outsideEquipment: this.fb.array([]),
      securityEquipment: this.fb.array([]),
      pictures: this.fb.array([]),
      // seatingCapacity: new FormControl(''),
      // numberDoors: new FormControl(''),
      type: new FormControl(''),
      trim: new FormControl(''),
      generation: new FormControl(''),
      serie: new FormControl(''),
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
    /*---Update list of model-- */
    // this.updateCarForm.get('brand')?.valueChanges.subscribe((value: any) => {
    //   this.arrayModel = []
    //   arrayBrand.map((b: any) => {
    //     if (b.brand === value) {
    //       this.arrayModel = b.model
    //     }
    //   })

    // })
    this.updateCarForm.get('brand')?.valueChanges.subscribe((value: any) => {
      let parts = value.split(',');
      this.nameBrand = parts;
      this.carService.getModel(parts[1]).subscribe((data: any) => {
        this.arrayModel = data.car_model
      })
    });
    this.updateCarForm.get('model')?.valueChanges.subscribe((value: any) => {
      let parts = value.split(',');
      this.nameModel = parts;
      this.carService.getGeneration(parts[1]).subscribe((data: any) => {
        this.arrayGeneration = data.car_generation
      })
    });
    this.updateCarForm.get('generation')?.valueChanges.subscribe((value: any) => {
      let parts = value.split(',');
      this.nameGeneration = parts;
      this.carService.getSerie(parts[1]).subscribe((data: any) => {
        this.arraySerie = data.car_serie
      })
    });
    this.updateCarForm.get('serie')?.valueChanges.subscribe((value: any) => {
      let parts = value.split(',');
      this.nameSerie = parts;
      this.carService.getTrim(parts[1]).subscribe((data: any) => {
        this.arrayTrim = data.car_trim
      })
    });
    this.updateCarForm.get('trim')?.valueChanges.subscribe((value: any) => {
      let parts = value.split(',');
      this.nameTrim = parts;
      this.carService.getSpecification(parts[1]).subscribe((data: any) => {
        this.arraySpecification = data.specifications
      })
    });
  }
  getBrands() {
    this.carService.getMarque().subscribe((data: any) => {
      this.arrayBrand = data.car_make;
    })

  }
  getCarDetails(id: any) {
    this.carService.getOneCar(id).subscribe((data: any) => {
      if (data !== null && data !== undefined) {
        this.carDetails = data.voiture;
        this.carDetails.brand = JSON.parse(this.carDetails.brand)
        this.carDetails.voitureOption = JSON.parse(this.carDetails.voitureOption)
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
          this.carService.getSerie(this.carDetails.voitureOption.generation.id).subscribe((data: any) => {
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
        this.updateCarForm.get('brand')?.setValue([this.carDetails.brand.value, this.carDetails.brand.id])
        this.updateCarForm.get('model')?.setValue([this.carDetails.voitureOption.model, this.carDetails.voitureOption.model.id])
        this.updateCarForm.get('generation')?.setValue([this.carDetails.generation.value, this.carDetails.generation.id])
        this.updateCarForm.get('serie')?.setValue([this.carDetails.serie.value, this.carDetails.serie.id])

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
        this.kits = this.updateCarForm.get('pictures')?.value

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
    // this.kits.filter((data:any)=>{data})
  }
  updateCar() {
    let brand = { 'id': this.nameBrand[1], 'value': this.nameBrand[0] }
    let model = { 'id': this.nameModel[1], 'value': this.nameModel[0] }
    let trims = { 'id': this.nameTrim[1], 'value': this.nameTrim[0] }
    let generation = { 'id': this.nameGeneration[1], 'value': this.nameGeneration[0] }
    let serie = { 'id': this.nameSerie[1], 'value': this.nameSerie[0] }
    let body = {
      id: this.carDetails.id,
      availablity: this.updateCarForm.get('availablity')?.value,
      title: this.updateCarForm.get('title')?.value,
      phone: this.updateCarForm.get('phone')?.value,
      country: this.updateCarForm.get('country')?.value,
      city: this.updateCarForm.get('city')?.value,
      price: this.updateCarForm.get('price')?.value,
      color: this.updateCarForm.get('color')?.value,
      carrosserie: this.updateCarForm.get('carrosserie')?.value,
      guarantee: this.updateCarForm.get('guarantee')?.value,
      year: this.updateCarForm.get('year')?.value,
      category: this.updateCarForm.get('category')?.value,
      pictures: this.updateCarForm.get('pictures')?.value,
      address: this.updateCarForm.get('address')?.value,
      motorization: this.updateCarForm.get('motorization')?.value,
      mileage: this.updateCarForm.get('mileage')?.value,
      energy: this.updateCarForm.get('energy')?.value,
      transmission: this.updateCarForm.get('transmission')?.value,
      powerFiscal: this.updateCarForm.get('powerFiscal')?.value,
      gearbox: this.updateCarForm.get('gearbox')?.value,
      description: this.updateCarForm.get('description')?.value,
      insideEquipment: this.updateCarForm.get('insideEquipment')?.value,
      outsideEquipment: this.updateCarForm.get('outsideEquipment')?.value,
      securityEquipment: this.updateCarForm.get('securityEquipment')?.value,
      type: this.userRole !== 'user' ? 'Occasion' : this.updateCarForm.get('type')?.value,
      brand: JSON.stringify(brand),
      model: model,
      trims:trims,
      generation:generation,
      serie:serie
      // brand: { 'id': this.nameBrand[1], 'value': this.nameBrand[0] },
      // model: { 'id': this.nameModel[1], 'value': this.nameModel[0] },
      // trims: { 'id': this.nameTrim[1], 'value': this.nameTrim[0] },
      // generation: { 'id': this.nameGeneration[1], 'value': this.nameGeneration[0] },
      // serie: { 'id': this.nameSerie[1], 'value': this.nameSerie[0] }
    }

    this.carService.updateCar(body).subscribe((response: any) => {
      if (response.message === 'voiture was registered successfully!') {
        this.successMsg = 'Voiture a été modifié avec succès!'
        setTimeout(() => {
          this.router.navigate(['/car-detail', this.carDetails.id])
        }, 1000);
      }
      //this.router.navigate([''])
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
          let selectedFile = r.result;
          let selectedFilename = file.name;
          // const FileKit = this.base64ToFile(selectedFile, selectedFilename);
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
  base64ToFile(data: any, filename: any) {
    const arr = data.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

}
