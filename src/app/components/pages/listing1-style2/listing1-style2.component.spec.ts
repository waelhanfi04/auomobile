import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing1Style2Component } from './listing1-style2.component';

describe('Listing1Style2Component', () => {
  let component: Listing1Style2Component;
  let fixture: ComponentFixture<Listing1Style2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listing1Style2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listing1Style2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
