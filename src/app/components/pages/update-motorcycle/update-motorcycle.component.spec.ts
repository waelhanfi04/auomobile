import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMotorcycleComponent } from './update-motorcycle.component';

describe('UpdateMotorcycleComponent', () => {
  let component: UpdateMotorcycleComponent;
  let fixture: ComponentFixture<UpdateMotorcycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMotorcycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMotorcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
