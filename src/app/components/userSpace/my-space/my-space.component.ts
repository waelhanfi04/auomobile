import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-space',
  templateUrl: './my-space.component.html',
  styleUrls: ['./my-space.component.css']
})
export class MySpaceComponent implements OnInit {
  userRole:any
  constructor() { }

  ngOnInit(): void {
    this.userRole= localStorage.getItem('role');
  }

}
