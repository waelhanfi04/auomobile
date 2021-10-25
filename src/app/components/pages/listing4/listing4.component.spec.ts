import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing4Component } from './listing4.component';

describe('Listing4Component', () => {
  let component: Listing4Component;
  let fixture: ComponentFixture<Listing4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listing4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listing4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
