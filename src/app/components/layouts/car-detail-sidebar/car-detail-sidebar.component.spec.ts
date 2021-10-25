import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailSidebarComponent } from './car-detail-sidebar.component';

describe('CarDetailSidebarComponent', () => {
  let component: CarDetailSidebarComponent;
  let fixture: ComponentFixture<CarDetailSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDetailSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
