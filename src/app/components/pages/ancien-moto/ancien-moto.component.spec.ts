import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AncienMotoComponent } from './ancien-moto.component';

describe('AncienMotoComponent', () => {
  let component: AncienMotoComponent;
  let fixture: ComponentFixture<AncienMotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AncienMotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AncienMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
