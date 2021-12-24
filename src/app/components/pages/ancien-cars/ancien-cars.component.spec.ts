import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AncienCarsComponent } from './ancien-cars.component';

describe('AncienCarsComponent', () => {
  let component: AncienCarsComponent;
  let fixture: ComponentFixture<AncienCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AncienCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AncienCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
