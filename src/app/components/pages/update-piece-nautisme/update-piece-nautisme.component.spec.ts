import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePieceNautismeComponent } from './update-piece-nautisme.component';

describe('UpdatePieceNautismeComponent', () => {
  let component: UpdatePieceNautismeComponent;
  let fixture: ComponentFixture<UpdatePieceNautismeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePieceNautismeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePieceNautismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
