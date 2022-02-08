import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPieceNautismeComponent } from './add-piece-nautisme.component';

describe('AddPieceNautismeComponent', () => {
  let component: AddPieceNautismeComponent;
  let fixture: ComponentFixture<AddPieceNautismeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPieceNautismeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPieceNautismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
