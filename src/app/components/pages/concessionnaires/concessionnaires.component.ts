import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car/car.service';
import { concessionnaires } from 'src/app/shared/config';

@Component({
  selector: 'app-concessionnaires',
  templateUrl: './concessionnaires.component.html',
  styleUrls: ['./concessionnaires.component.css']
})
export class ConcessionnairesComponent implements OnInit {
 concessionnaires:any;
 show=false;
 addMotoForm: FormGroup
 successMsg:any;
 isAcceptedImageFileType: boolean = true;
 kits = []

  constructor(private carService: CarService, private fb: FormBuilder,private router: Router) {
    this.addMotoForm = new FormGroup({
      nom: new FormControl(null),
      tel: new FormControl(null),
      fax: new FormControl(null),
      type: new FormControl(null),
      address: new FormControl(null),
      pictures: this.fb.array([]),

    });
   }

  ngOnInit(): void {
    // this.concessionnaires=concessionnaires
    this.getConsessionnaire();

  }
  getConsessionnaire(){
    this.carService.getConcessionnaire().subscribe((response: any) => {
      //if (response.message === 'voiture was registered successfully!') {
        this.concessionnaires=response.concessionnaire
        console.log(this.concessionnaires);
     // }
    })
  }
  addConcessionnaire() {
    
     let body = {
      nom: this.addMotoForm.get('nom')?.value,
      tel: this.addMotoForm.get('tel')?.value,
      fax: this.addMotoForm.get('fax')?.value,
      type: this.addMotoForm.get('type')?.value,
      address: this.addMotoForm.get('address')?.value,
      pictures: this.addMotoForm.get('pictures')?.value

    }
    this.carService.addConcessionnaire(body).subscribe((response: any) => {
      //if (response.message === 'voiture was registered successfully!') {
        this.successMsg = 'Votre concessionnaire a été ajouté avec succès!';
        setTimeout(() => {
          this.router.navigate(['/concessionnaires'])
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
  delete(index: any) {
    const checkArray: FormArray = this.addMotoForm.get('pictures') as FormArray;
    checkArray.removeAt(index);
    this.kits = this.addMotoForm.get('pictures')?.value
    // this.kits.filter((data:any)=>{data})
  }
}
