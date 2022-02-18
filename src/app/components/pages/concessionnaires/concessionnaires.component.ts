import { Component, OnInit } from '@angular/core';
import { concessionnaires } from 'src/app/shared/config';

@Component({
  selector: 'app-concessionnaires',
  templateUrl: './concessionnaires.component.html',
  styleUrls: ['./concessionnaires.component.css']
})
export class ConcessionnairesComponent implements OnInit {
 concessionnaires:any;
  constructor() { }

  ngOnInit(): void {
    this.concessionnaires=concessionnaires
    console.log(this.concessionnaires)
  }

}
