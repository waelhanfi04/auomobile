import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeurProDetailsComponent } from './vendeur-pro-details.component';

describe('VendeurProDetailsComponent', () => {
  let component: VendeurProDetailsComponent;
  let fixture: ComponentFixture<VendeurProDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendeurProDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendeurProDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
