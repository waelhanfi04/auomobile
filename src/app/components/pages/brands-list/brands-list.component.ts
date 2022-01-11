import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.css']
})
export class BrandsListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  getCarByBrand(brand:string){
    this.router.navigate(['/voitures-neuves',brand])

  }
}
