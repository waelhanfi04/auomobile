import { Component, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car/car.service';
import { arrayInsideEquipment, arrayOutsideEquipment, arraysecurityEquipment, arrayCategoryCar, arrayCategories, arrayBrand, concessionnaires } from 'src/app/shared/config';
@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  concessionnaires:any;
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
  categoriesList : any= []
  arrayBrand: any;
  nameCategory:any;
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
      title: new FormControl(null),
     // availablity: new FormControl(null),
      phone: new FormControl(null),
      // city: new FormControl(null),
      brand: new FormControl(null),
      model: new FormControl(null),
      color: new FormControl(null),
      carrosserie: new FormControl(null),
      // guarantee: new FormControl(null),
      year: new FormControl(null),
      type: new FormControl('Occasion'),
      category: new FormControl('1'),
      price: new FormControl(null),
      concessionnaire:new FormControl(null),
      fax:new FormControl(null),
      // description: new FormControl(null),
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
    //this.getCategory();
    // this.concessionnaires=concessionnaires
  this.getConsessionnaire();
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
    // this.addCarForm.get('category')?.valueChanges.subscribe((value: any) => {
    //   this.nameCategory = value;
    //   console.log(this.nameCategory);
    //   this.carService.getMarque(this.nameCategory).subscribe((data: any) => {
    //     this.arrayBrand = data.car_make
    //   })
    // });
    this.addCarForm.get('brand')?.valueChanges.subscribe((value: any) => {
      let parts = value.split(',');
      this.nameBrand = parts
      this.carService.getModel(parts[1]).subscribe((data: any) => {
        this.arrayModel = data.car_model
      })
    });
    this.addCarForm.get('model')?.valueChanges.subscribe((value: any) => {
      //if(this.nameCategory === 1){
        let parts = value.split(',');
        this.nameModel = parts
        this.carService.getGeneration(parts[1]).subscribe((data: any) => {
          this.arrayGeneration = data.car_generation
        })
      // }else{
      //   let parts = value.split(',');
      //   this.nameModel = parts
      //   this.carService.getSerie(parts[1],'moto').subscribe((data: any) => {
      //     this.arraySerie = data.car_serie
      //   })
      // }
      
    });
    this.addCarForm.get('generation')?.valueChanges.subscribe((value: any) => {
      let parts = value.split(',');
      this.nameGeneration = parts
      this.carService.getSerie(parts[1],'voiture').subscribe((data: any) => {
        this.arraySerie = data.car_serie
      })
    });
    this.addCarForm.get('serie')?.valueChanges.subscribe((value: any) => {
      let parts = value.split(',');
      this.nameSerie = parts;
      this.carService.getTrim(parts[1]).subscribe((data: any) => {
        this.arrayTrim = data.car_trim
      })
    });
    this.addCarForm.get('trim')?.valueChanges.subscribe((value: any) => {
      let parts = value.split(',');
      this.nameTrim = parts;
      this.carService.getSpecification(parts[1]).subscribe((data: any) => {
        this.arraySpecification = data.specifications
      })
    });

    this.addCarForm.get('concessionnaire')?.valueChanges.subscribe((value: any) => {
     let concessionaire= this.concessionnaires.filter((concess:any)=>{
          return concess.id ===value
      })      
     this.addCarForm.get('address')?.setValue(concessionaire[0].address)
     this.addCarForm.get('fax')?.setValue(concessionaire[0]?.fax ? concessionaire[0]?.fax : '-')
     this.addCarForm.get('phone')?.setValue(concessionaire[0].tel)

    });
  }
  // getCategory() {
  //   this.carService.getCategory().subscribe((data: any) => {
  //     this.categoriesList = data.car_type;
  //   })

  // }
  getBrands() {
    this.nameCategory='1'
    this.carService.getMarque(this.nameCategory).subscribe((data: any) => {
      this.arrayBrand = data.car_make;
    })
  }

  getConsessionnaire(){
    this.carService.getConcessionnaire().subscribe((response: any) => {
      //if (response.message === 'voiture was registered successfully!') {
        this.concessionnaires=response.concessionnaire
        console.log(this.concessionnaires);
     // }
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
    console.log(this.addCarForm.get('concessionnaire')?.value)
    let brand = { 'id': this.nameBrand[1], 'value': this.nameBrand[0] }
    let model = { 'id': this.nameModel[1], 'value': this.nameModel[0] }
    let trims = { 'id': this.nameTrim[1], 'value': this.nameTrim[0] }
    let generation = { 'id': this.nameGeneration[1], 'value': this.nameGeneration[0] }
    let serie = { 'id': this.nameSerie[1], 'value': this.nameSerie[0] }
     let body = {
      availablity:'',
      title: this.addCarForm.get('title')?.value,
      phone: this.addCarForm.get('phone')?.value,
      country: this.addCarForm.get('country')?.value,
      concessionnaire:this.addCarForm.get('concessionnaire')?.value,
      city: '',
      price: this.addCarForm.get('price')?.value,
      color: this.addCarForm.get('color')?.value,
      carrosserie: this.addCarForm.get('carrosserie')?.value,
      guarantee: '',
      year: this.addCarForm.get('year')?.value,
      category: 1,
      pictures: this.addCarForm.get('pictures')?.value,
      address: this.addCarForm.get('address')?.value,
      motorization: null,
      mileage: this.userRole === 'admin' ? 0 : this.addCarForm.get('mileage')?.value,
      energy: this.addCarForm.get('energy')?.value,
      transmission: this.addCarForm.get('transmission')?.value,
      powerFiscal: this.addCarForm.get('powerFiscal')?.value,
      gearbox: this.addCarForm.get('gearbox')?.value,
      description: this.addCarForm.get('description')?.value,
      insideEquipment: this.addCarForm.get('insideEquipment')?.value,
      outsideEquipment: this.addCarForm.get('outsideEquipment')?.value,
      securityEquipment: this.addCarForm.get('securityEquipment')?.value,
      type: this.userRole === 'admin'? 'Neuve': 'Occasion',
      status: this.userRole === 'admin'? 'accepted': 'pending',
      numberDoors: this.addCarForm.get('numberDoors')?.value,
      seatingCapacity: this.addCarForm.get('seatingCapacity')?.value,
      puissanceDIN: this.addCarForm.get('puissanceDIN')?.value,
      permis: this.addCarForm.get('permis')?.value,
      carburant: this.addCarForm.get('carburant')?.value,
      miseCirculation: this.addCarForm.get('miseCirculation')?.value,
      brand: JSON.stringify(brand),
      model: model,
      trims: trims,
      generation: generation,
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
          const picArray: FormArray = this.addCarForm.get('pictures') as FormArray;
          picArray.push(new FormControl(fileKit));
          this.kits = this.addCarForm.get('pictures')?.value
        }
      }
      else {
        this.isAcceptedImageFileType = false;
      }
    }
  }

}
