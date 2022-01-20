import { Component, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car/car.service';
import { arrayInsideEquipment, arrayOutsideEquipment, arraysecurityEquipment, arrayCategoryCar, arrayCategories, arrayBrand } from 'src/app/shared/config';
@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  addCarForm: FormGroup
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
  isAcceptedImageFileType: boolean = true;
  userRole: any
  constructor(private router: Router, private fb: FormBuilder, private carService: CarService) {
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
      //month: new FormControl(''),
      year: new FormControl(''),
      type: new FormControl('Occasion'),
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
      trim: new FormControl(''),
      generation: new FormControl(''),
      serie: new FormControl(''),
    });

  }

  ngOnInit(): void {
    this.getBrands()
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

    this.addCarForm.get('brand')?.valueChanges.subscribe((value: any) => {
      let parts = value.split(',');
      this.nameBrand=parts
      this.carService.getModel(parts[1]).subscribe((data: any) => {
        this.arrayModel = data.car_model
      })
    });
    this.addCarForm.get('model')?.valueChanges.subscribe((value: any) => {
      let parts = value.split(',');
      this.nameModel=parts
      this.carService.getGeneration(parts[1]).subscribe((data: any) => {
        this.arrayGeneration = data.car_generation
      })
    });
    this.addCarForm.get('generation')?.valueChanges.subscribe((value: any) => {
      let parts = value.split(',');
      this.nameGeneration=parts
      this.carService.getSerie(parts[1]).subscribe((data: any) => {
        this.arraySerie = data.car_serie
      })
    });
    this.addCarForm.get('serie')?.valueChanges.subscribe((value: any) => {
      let parts = value.split(',');
      this.nameSerie=parts;
      this.carService.getTrim(parts[1]).subscribe((data: any) => {
        this.arrayTrim = data.car_trim
      })
    });
    this.addCarForm.get('trim')?.valueChanges.subscribe((value: any) => {
      let parts = value.split(',');
      this.nameTrim=parts;
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
  
  onCheckboxChange(e: any, controlName: any) {
    const checkArray: FormArray = this.addCarForm.get(controlName) as FormArray;

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
    const checkArray: FormArray = this.addCarForm.get('pictures') as FormArray;
    checkArray.removeAt(index);
    this.kits = this.addCarForm.get('pictures')?.value
    console.log('looog', this.addCarForm.get('pictures')?.value)
    // this.kits.filter((data:any)=>{data})
  }
  addCar() {
    let brand = { 'id': this.nameBrand[1], 'value': this.nameBrand[0] }
    let model = { 'id': this.nameModel[1], 'value': this.nameModel[0] }
    let trims = { 'id': this.nameTrim[1], 'value': this.nameTrim[0] }
    let generation = { 'id': this.nameGeneration[1], 'value': this.nameGeneration[0] }
    let serie = { 'id': this.nameSerie[1], 'value': this.nameSerie[0] }
    if (this.userRole !== 'user') {
      this.addCarForm.get('type')?.setValue('Occasion')
    }

     let body = {
      availablity: this.addCarForm.get('availablity')?.value,
      title: this.addCarForm.get('title')?.value,
      phone: this.addCarForm.get('phone')?.value,
      country: this.addCarForm.get('country')?.value,
      city: this.addCarForm.get('city')?.value,
      price: this.addCarForm.get('price')?.value,
      color: this.addCarForm.get('color')?.value,
      carrosserie: this.addCarForm.get('carrosserie')?.value,
      guarantee: this.addCarForm.get('guarantee')?.value,
      year: this.addCarForm.get('year')?.value,
      category: this.addCarForm.get('category')?.value,
      pictures: this.addCarForm.get('pictures')?.value,
      address: this.addCarForm.get('address')?.value,
      motorization: this.addCarForm.get('motorization')?.value,
      mileage: this.addCarForm.get('mileage')?.value,
      energy: this.addCarForm.get('energy')?.value,
      transmission: this.addCarForm.get('transmission')?.value,
      powerFiscal: this.addCarForm.get('powerFiscal')?.value,
      gearbox: this.addCarForm.get('gearbox')?.value,
      description: this.addCarForm.get('description')?.value,
      insideEquipment: this.addCarForm.get('insideEquipment')?.value,
      outsideEquipment: this.addCarForm.get('outsideEquipment')?.value,
      securityEquipment: this.addCarForm.get('securityEquipment')?.value,
      type: this.userRole!=='user'? 'Occasion': this.addCarForm.get('type')?.value,
      brand: JSON.stringify(brand),
      model:model,
      trims:trims,
      generation: generation,
      serie:serie
      // brand: {'id':this.nameBrand[1],'value':this.nameBrand[0]},
      // model: {'id':this.nameModel[1],'value':this.nameModel[0]},
      // trims: {'id':this.nameTrim[1],'value':this.nameTrim[0]},
      // generation:{'id':this.nameGeneration[1],'value':this.nameGeneration[0]},
      // serie:{'id':this.nameSerie[1],'value':this.nameSerie[0]}
    }
  
    this.carService.addCar(body).subscribe((response: any) => {
      console.log('response', response)
      this.successMsg = 'Votre annonce a été ajouté avec succès!';
      setTimeout(() => {
        this.router.navigate(['/'])
      }, 1000);
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
          console.log('FileKit', fileKit)
          const picArray: FormArray = this.addCarForm.get('pictures') as FormArray;
          picArray.push(new FormControl(fileKit));
          console.log('piiiiiic-->', this.addCarForm.get('pictures')?.value)
          this.kits = this.addCarForm.get('pictures')?.value
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
