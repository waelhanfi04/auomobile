import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing2Style2Component } from './listing2-style2.component';

describe('Listing2Style2Component', () => {
  let component: Listing2Style2Component;
  let fixture: ComponentFixture<Listing2Style2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listing2Style2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listing2Style2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
