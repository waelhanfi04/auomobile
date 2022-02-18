import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarByModelComponent } from './car-by-model.component';

describe('CarByModelComponent', () => {
  let component: CarByModelComponent;
  let fixture: ComponentFixture<CarByModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarByModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarByModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
