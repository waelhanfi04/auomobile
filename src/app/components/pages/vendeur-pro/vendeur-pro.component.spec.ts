import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeurProComponent } from './vendeur-pro.component';

describe('VendeurProComponent', () => {
  let component: VendeurProComponent;
  let fixture: ComponentFixture<VendeurProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendeurProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendeurProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
