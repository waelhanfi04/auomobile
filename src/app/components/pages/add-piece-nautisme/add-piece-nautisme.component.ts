import { Component, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CarService } from 'src/app/services/car/car.service';
import { arrayPiecesMarque, arrayNautismeMarque } from 'src/app/shared/config';

@Component({
  selector: 'app-add-piece-nautisme',
  templateUrl: './add-piece-nautisme.component.html',
  styleUrls: ['./add-piece-nautisme.component.css']
})
export class AddPieceNautismeComponent implements OnInit {
  arrayPiecesMarque = arrayPiecesMarque
  arrayNautismeMarque = arrayNautismeMarque
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
  categoriesList: any = []
  arrayBrand: any;
  nameCategory = '20';
  nameBrand: string = ''
  arrayModel: any
  nameModel: string = ''
  nameTrim: string = ''
  arrayGeneration: any
  nameGeneration: string = ''
  arraySpecification: any
  arraySerie: any
  nameSerie: string = ''
  kits = []
  isAcceptedImageFileType: boolean = true;
  userRole: any
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private carService: CarService) {
    this.addMotoForm = new FormGroup({
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
      type: new FormControl('Occasion'),
      category: new FormControl(''),
      price: new FormControl(null),
      description: new FormControl(null),
      address: new FormControl(null),
      motorization: new FormControl(null),
      mileage: new FormControl(null),
      energy: new FormControl(null),
      transmission: new FormControl(null),
      powerFiscal: new FormControl(null),
      gearbox: new FormControl(null),
      insideEquipment: new FormControl(null),
      outsideEquipment: new FormControl(null),
      securityEquipment: new FormControl(null),
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
    this.route.params
      .pipe(
        map((params: any) => {
          return params['category'];
        })
      )
      .subscribe((params) => { this.addMotoForm.get('category')?.setValue(params); this.nameCategory = params });
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
      this.arrayModel = []
      arrayPiecesMarque.map((b: any) => {
        if (b.brand === value) {
          this.arrayModel = b.model
        }
      })
    });


  }

  delete(index: any) {
    const checkArray: FormArray = this.addMotoForm.get('pictures') as FormArray;
    checkArray.removeAt(index);
    this.kits = this.addMotoForm.get('pictures')?.value
    // this.kits.filter((data:any)=>{data})
  }
  addCar() {

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
      category: this.nameGeneration,
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
      type: this.userRole === 'admin' ? 'Neuve' : 'Occasion',
      numberDoors: this.addMotoForm.get('numberDoors')?.value,
      seatingCapacity: this.addMotoForm.get('seatingCapacity')?.value,
      puissanceDIN: this.addMotoForm.get('puissanceDIN')?.value,
      permis: this.addMotoForm.get('permis')?.value,
      carburant: this.addMotoForm.get('carburant')?.value,
      miseCirculation: this.addMotoForm.get('miseCirculation')?.value,
      brand: this.addMotoForm.get('brand')?.value,
      model: this.addMotoForm.get('model')?.value,
      trims: null,
      generation: null,
      serie: null
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
