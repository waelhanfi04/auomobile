import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcessionnairesComponent } from './concessionnaires.component';

describe('ConcessionnairesComponent', () => {
  let component: ConcessionnairesComponent;
  let fixture: ComponentFixture<ConcessionnairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcessionnairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcessionnairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
