import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage7Component } from './homepage7.component';

describe('Homepage7Component', () => {
  let component: Homepage7Component;
  let fixture: ComponentFixture<Homepage7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homepage7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homepage7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
