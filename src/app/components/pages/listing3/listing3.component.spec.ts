import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing3Component } from './listing3.component';

describe('Listing3Component', () => {
  let component: Listing3Component;
  let fixture: ComponentFixture<Listing3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listing3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listing3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
