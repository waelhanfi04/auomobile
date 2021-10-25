import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing1Component } from './listing1.component';

describe('Listing1Component', () => {
  let component: Listing1Component;
  let fixture: ComponentFixture<Listing1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listing1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listing1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
