import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage6Component } from './homepage6.component';

describe('Homepage6Component', () => {
  let component: Homepage6Component;
  let fixture: ComponentFixture<Homepage6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homepage6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homepage6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
