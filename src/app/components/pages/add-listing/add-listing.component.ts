import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  addCarForm: FormGroup;
  step1:boolean=true;
  step2:boolean=false;
  step3:boolean=false;
  step4:boolean=false;
  errorMsg='';
  successMsg='';
  isSubmitting: boolean = false;
  years:any=[]
  constructor(private router:Router) {
    this.addCarForm = new FormGroup({
      title:new FormControl(''),
      availablity:new FormControl(''),
      phone:new FormControl(''),
      country:new FormControl(''),
      city:new FormControl(''),
      brand:new FormControl(''),
      model:new FormControl(''),
      color:new FormControl(''),
      carrosserie:new FormControl(''),
      garantie:new FormControl(''),
      month:new FormControl(''),
      year:new FormControl(''),
      category:new FormControl(''),
      price:new FormControl(''),
      description:new FormControl(''),
    });

  }

  ngOnInit(): void {
    var aujd = new Date();
    const currentYear = aujd.getFullYear();

    for (let year =1900; year <currentYear+1; year++) {
      this.years.push(year);
    }
  }

}
