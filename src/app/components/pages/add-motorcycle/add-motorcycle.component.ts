import { Component, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car/car.service';
import { arrayInsideEquipment, arrayOutsideEquipment, arraysecurityEquipment, arrayCategoryCar, arrayCategories, arrayBrand } from 'src/app/shared/config';

@Component({
  selector: 'app-add-motorcycle',
  templateUrl: './add-motorcycle.component.html',
  styleUrls: ['./add-motorcycle.component.css']
})
export class AddMotorcycleComponent implements OnInit {

  addMotoForm: FormGroup
  step1: boolean = true
  step2: boolean = false
  step3: boolean = false
  step4: boolean = false
  errorMsg = ''
  successMsg = ''
  isSubmitting: boolean = false
  years: any = []
  powerFiscalArray: any = []
  insideEquipmentList = arrayInsideEquipment
  outsideEquipmentList = arrayOutsideEquipment
  securityEquipmentList = arraysecurityEquipment
  categoriesList : any= []
  arrayBrand: any;
  nameCategory='20';
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
  isAcceptedImageFileType: boolean = true;
  userRole: any
  constructor(private router: Router, private fb: FormBuilder, private carService: CarService) {
    this.addMotoForm = new FormGroup({
      title: new FormControl(''),
      availablity: new FormControl(''),
      phone: new FormControl(''),
      city: new FormControl(''),
      brand: new FormControl(''),
      model: new FormControl(''),
      color: new FormControl(''),
      carrosserie: new FormControl(''),
      guarantee: new FormControl(''),
      year: new FormControl(''),
      type: new FormControl('Occasion'),
      category: new FormControl('20'),
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
      trim: new FormControl(''),
      generation: new FormControl(''),
      serie: new FormControl(''),
      numberDoors: new FormControl(''),
      seatingCapacity: new FormControl(''),
      puissanceDIN: new FormControl(''),
      permis: new FormControl(''),
      carburant: new FormControl(''),
      miseCirculation: new FormControl('')
    });

  }

  ngOnInit(): void {
    //this.getCategory();
    this.getBrands();
    this.userRole = localStorage.getItem('role')
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
    /*---get data-- */
    // this.addMotoForm.get('category')?.valueChanges.subscribe((value: any) => {
    //   this.nameCategory = value;
    //   console.log(this.nameCategory);
    //   this.carService.getMarque(this.nameCategory).subscribe((data: any) => {
    //     this.arrayBrand = data.car_make
    //   })
    // });
    this.addMotoForm.get('brand')?.valueChanges.subscribe((value: any) => {
      let parts = value.split(',');
      this.nameBrand = parts
      this.carService.getModel(parts[1]).subscribe((data: any) => {
        this.arrayModel = data.car_model
      })
    });
    this.addMotoForm.get('model')?.valueChanges.subscribe((value: any) => {
     // if(this.nameCategory === 1){
        // let parts = value.split(',');
        // this.nameModel = parts
        // this.carService.getGeneration(parts[1]).subscribe((data: any) => {
        //   this.arrayGeneration = data.car_generation
        // })
      // }else{
        let parts = value.split(',');
        this.nameModel = parts
        this.carService.getSerie(parts[1],'moto').subscribe((data: any) => {
          this.arraySerie = data.car_serie
        })
      // }
      
    });
    // this.addMotoForm.get('generation')?.valueChanges.subscribe((value: any) => {
    //   let parts = value.split(',');
    //   this.nameGeneration = parts
    //   this.carService.getSerie(parts[1],'moto').subscribe((data: any) => {
    //     this.arraySerie = data.car_serie
    //   })
    // });
    this.addMotoForm.get('serie')?.valueChanges.subscribe((value: any) => {
      let parts = value.split(',');
      this.nameSerie = parts;
      this.carService.getTrim(parts[1]).subscribe((data: any) => {
        this.arrayTrim = data.car_trim
      })
    });
    this.addMotoForm.get('trim')?.valueChanges.subscribe((value: any) => {
      let parts = value.split(',');
      this.nameTrim = parts;
      this.carService.getSpecification(parts[1]).subscribe((data: any) => {
        this.arraySpecification = data.specifications
      })
    });
  }
  // getCategory() {
  //   this.carService.getCategory().subscribe((data: any) => {
  //     this.categoriesList = data.car_type;
  //   })

  // }
  getBrands() {
    this.nameCategory='20'
    this.carService.getMarque(this.nameCategory).subscribe((data: any) => {
      this.arrayBrand = data.car_make;
    })
  }

  onCheckboxChange(e: any, controlName: any) {
    const checkArray: FormArray = this.addMotoForm.get(controlName) as FormArray;

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
    const checkArray: FormArray = this.addMotoForm.get('pictures') as FormArray;
    checkArray.removeAt(index);
    this.kits = this.addMotoForm.get('pictures')?.value
    console.log('looog', this.addMotoForm.get('pictures')?.value)
    // this.kits.filter((data:any)=>{data})
  }
  addCar() {
    let brand = { 'id': this.nameBrand[1], 'value': this.nameBrand[0] }
    let model = { 'id': this.nameModel[1], 'value': this.nameModel[0] }
    let trims = { 'id': this.nameTrim[1], 'value': this.nameTrim[0] }
    let generation = { 'id': this.nameGeneration[1], 'value': this.nameGeneration[0] }
    let serie = { 'id': this.nameSerie[1], 'value': this.nameSerie[0] }
     let body = {
      availablity: this.addMotoForm.get('availablity')?.value,
      title: this.addMotoForm.get('title')?.value,
      phone: this.addMotoForm.get('phone')?.value,
      country: this.addMotoForm.get('country')?.value,
      city: this.addMotoForm.get('city')?.value,
      price: this.addMotoForm.get('price')?.value,
      color: this.addMotoForm.get('color')?.value,
      carrosserie: this.addMotoForm.get('carrosserie')?.value,
      guarantee: this.addMotoForm.get('guarantee')?.value,
      year: this.addMotoForm.get('year')?.value,
      category: this.addMotoForm.get('category')?.value,
      pictures: this.addMotoForm.get('pictures')?.value,
      address: this.addMotoForm.get('address')?.value,
      motorization: null,
      mileage: this.userRole === 'admin' ? 0 : this.addMotoForm.get('mileage')?.value,
      energy: this.addMotoForm.get('energy')?.value,
      transmission: this.addMotoForm.get('transmission')?.value,
      powerFiscal: this.addMotoForm.get('powerFiscal')?.value,
      gearbox: this.addMotoForm.get('gearbox')?.value,
      description: this.addMotoForm.get('description')?.value,
      insideEquipment: this.addMotoForm.get('insideEquipment')?.value,
      outsideEquipment: this.addMotoForm.get('outsideEquipment')?.value,
      securityEquipment: this.addMotoForm.get('securityEquipment')?.value,
      type: this.userRole === 'admin'? 'Neuve': 'Occasion',
      numberDoors: this.addMotoForm.get('numberDoors')?.value,
      seatingCapacity: this.addMotoForm.get('seatingCapacity')?.value,
      puissanceDIN: this.addMotoForm.get('puissanceDIN')?.value,
      permis: this.addMotoForm.get('permis')?.value,
      carburant: this.addMotoForm.get('carburant')?.value,
      miseCirculation: this.addMotoForm.get('miseCirculation')?.value,
      brand: JSON.stringify(brand),
      model: model,
      trims: trims,
      generation: this.nameGeneration,
      serie: serie
    }

    this.carService.addCar(body).subscribe((response: any) => {
      //if (response.message === 'voiture was registered successfully!') {
        this.successMsg = 'Votre annonce a été ajouté avec succès!';
        setTimeout(() => {
          this.router.navigate(['/mes-annonces'])
        }, 1000);
     // }
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
          const picArray: FormArray = this.addMotoForm.get('pictures') as FormArray;
          picArray.push(new FormControl(fileKit));
          this.kits = this.addMotoForm.get('pictures')?.value
        }
      }
      else {
        this.isAcceptedImageFileType = false;
      }
    }
  }


}
