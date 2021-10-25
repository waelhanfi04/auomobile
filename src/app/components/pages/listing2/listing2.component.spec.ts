import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing2Component } from './listing2.component';

describe('Listing2Component', () => {
  let component: Listing2Component;
  let fixture: ComponentFixture<Listing2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listing2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
