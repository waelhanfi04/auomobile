import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

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
    this.router.navigate(['/brand',brand])
  }

}
