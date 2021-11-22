import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CarService } from 'src/app/services/car/car.service';
import { Car } from '../../../models/car'
import { arrayInsideEquipment,arrayOutsideEquipment,arraysecurityEquipment,arrayCategoryCar, arrayCategories, arrayBrand  } from 'src/app/shared/config';
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
  powerFiscalArray:any=[]
  insideEquipmentList=arrayInsideEquipment 
  outsideEquipmentList=arrayOutsideEquipment
  securityEquipmentList=arraysecurityEquipment
  categoriesList=arrayCategoryCar
  arrayBrand=arrayBrand
  arrayModel:any
  kits=[]
  isAcceptedImageFileType:boolean=true
  carDetails!:Car;
  constructor(private router: Router,private fb:FormBuilder,private carService:CarService,private route: ActivatedRoute) {
    this.updateCarForm = new FormGroup({
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
      seatingCapacity: new FormControl(''),
      numberDoors: new FormControl(''),
      pictures: this.fb.array([])
    });

  }

  ngOnInit(): void {
    this.route.params
    .pipe(
      map((params: any) => {
        console.log(params['id']);
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
    for (let i =4; i < 49; i++) {
      this.powerFiscalArray.push(i);
    }
    /*---Update list of model-- */
    this.updateCarForm.get('brand')?.valueChanges.subscribe((value:any)=>{
      this.arrayModel=[]
        arrayBrand.map((b:any)=>{
          if(b.brand===value){          
            this.arrayModel= b.model
          }
        })
      
    })
  }
  onCheckboxChange(e:any,controlName:any) {
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
  delete(index:any){
    const checkArray: FormArray = this.updateCarForm.get('pictures') as FormArray;
    checkArray.removeAt(index);
    this.kits=this.updateCarForm.get('pictures')?.value
    console.log('looog',this.updateCarForm.get('pictures')?.value)
    // this.kits.filter((data:any)=>{data})
  }
  updateCar(){
  console.log('this.updateCarForm?.value',this.updateCarForm?.value)
// this.carService.addCar(this.updateCarForm?.value).subscribe((response:any)=>{
//   console.log('response',response)
//   this.router.navigate([''])
// })
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
         const fileKit=r.result
          console.log('FileKit',fileKit)
          const picArray: FormArray = this.updateCarForm.get('pictures') as FormArray;
            picArray.push(new FormControl(fileKit));
            console.log('piiiiiic-->',this.updateCarForm.get('pictures')?.value)
            this.kits=this.updateCarForm.get('pictures')?.value
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
getCarDetails(id:any){
  this.carService.getOneCar(id).subscribe((data:any)=>{
    if(data){
      this.carDetails= new Car(data.voiture)
      console.log('car',data,'gg',this.carDetails)
    }
   
  })
}
}
