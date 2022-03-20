import { Component, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car/car.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { arrayInsideEquipment, arrayOutsideEquipment, arraysecurityEquipment, arrayCategoryCar, arrayCategories, arrayBrand } from 'src/app/shared/config';

@Component({
  selector: 'app-add-motorcycle',
  templateUrl: './add-motorcycle.component.html',
  styleUrls: ['./add-motorcycle.component.css']
})
export class AddMotorcycleComponent implements OnInit {
  concessionnaires:any;

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
  userRole: any;
  user :any;
  constructor(private router: Router, private fb: FormBuilder, private carService: CarService,private ProfileService: ProfileService) {
    this.addMotoForm = new FormGroup({
      concessionnaire:new FormControl(null),
      title: new FormControl(null),
      phone: new FormControl(null),
      city: new FormControl(null),
      brand: new FormControl(null),
      model: new FormControl(null),
      color: new FormControl(null),
      carrosserie: new FormControl(null),
      fax:new FormControl(null),
      year: new FormControl(null),
      type: new FormControl('Occasion'),
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
      trim: new FormControl(null),
      generation: new FormControl(null),
      serie: new FormControl(null),
      numberDoors: new FormControl(null),
      seatingCapacity: new FormControl(null),
      puissanceDIN: new FormControl(null),
      permis: new FormControl(null),
      carburant: new FormControl(null),
      miseCirculation: new FormControl(null),
      cylinder: new FormControl(null)
    });

  }

  ngOnInit(): void {
    //this.getCategory();
    this.userRole = localStorage.getItem('role')

    if(this.userRole !== 'admin'){
      this.getUserDetails();
    }else{
      this.getConsessionnaire();
    }

    this.getBrands();
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
      console.log(value)
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

    this.addMotoForm.get('concessionnaire')?.valueChanges.subscribe((value: any) => {
      let concessionaire= this.concessionnaires.filter((concess:any)=>{
           return concess.id ===value
       })      
      this.addMotoForm.get('address')?.setValue(concessionaire[0].address)
      this.addMotoForm.get('fax')?.setValue(concessionaire[0]?.fax ? concessionaire[0]?.fax : '-')
      this.addMotoForm.get('phone')?.setValue(concessionaire[0].tel)
 
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

  getUserDetails() {
    this.ProfileService.userDetails().subscribe((data: any) => {
      this.user = data.user
      this.addMotoForm.get('concessionnaire')?.setValue(this.user.companyName)
      this.addMotoForm.get('phone')?.setValue(this.user.companyPhone)
      this.addMotoForm.get('address')?.setValue(this.user.companyAddress)

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

  delete(index: any) {
    const checkArray: FormArray = this.addMotoForm.get('pictures') as FormArray;
    checkArray.removeAt(index);
    this.kits = this.addMotoForm.get('pictures')?.value
    // this.kits.filter((data:any)=>{data})
  }
  addCar() {
    let brand = { 'id': this.nameBrand[1], 'value': this.nameBrand[0] }
    let model = { 'id': this.nameModel[1], 'value': this.nameModel[0] }
    let trims = { 'id': '', 'value': '' }
    let serie = { 'id': this.nameSerie[1], 'value': this.nameSerie[0] }
    let generation = { 'id': '', 'value': '' }

     let body = {
      concessionnaire:this.addMotoForm.get('concessionnaire')?.value,
      availablity: '',
      title: this.addMotoForm.get('title')?.value,
      phone: this.addMotoForm.get('phone')?.value,
      country: this.addMotoForm.get('country')?.value,
      city: this.addMotoForm.get('city')?.value,
      price: this.addMotoForm.get('price')?.value,
      color: this.addMotoForm.get('color')?.value,
      carrosserie: this.addMotoForm.get('carrosserie')?.value,
      guarantee: '',
      year: this.addMotoForm.get('year')?.value,
      category:20,
      pictures: this.addMotoForm.get('pictures')?.value,
      address: this.addMotoForm.get('address')?.value,
      motorization: null,
      mileage: this.userRole === 'admin' ? 0 : this.addMotoForm.get('mileage')?.value,
      energy: this.addMotoForm.get('energy')?.value,
      transmission: this.addMotoForm.get('transmission')?.value,
      powerFiscal: this.addMotoForm.get('powerFiscal')?.value,
      gearbox: this.addMotoForm.get('gearbox')?.value,
      description:  this.userRole === 'admin' ? '' : this.addMotoForm.get('description')?.value,
      insideEquipment: this.addMotoForm.get('insideEquipment')?.value,
      outsideEquipment: this.addMotoForm.get('outsideEquipment')?.value,
      securityEquipment: this.addMotoForm.get('securityEquipment')?.value,
      type: this.userRole === 'admin'? 'Neuve': 'Occasion',
      numberDoors:this.addMotoForm.get('numberDoors')?.value,
      seatingCapacity: this.addMotoForm.get('seatingCapacity')?.value,
      puissanceDIN:this.addMotoForm.get('puissanceDIN')?.value,
      permis: this.addMotoForm.get('permis')?.value,
      carburant: this.addMotoForm.get('carburant')?.value,
      miseCirculation: this.addMotoForm.get('miseCirculation')?.value,
      cylinder: this.addMotoForm.get('cylinder')?.value,
      status: this.userRole === 'admin'? 'accepted': 'pending',
      brand: JSON.stringify(brand),
      model: model,
      trims: trims,
      generation:generation,
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
