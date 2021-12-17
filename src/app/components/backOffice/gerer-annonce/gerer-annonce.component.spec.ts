import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererAnnonceComponent } from './gerer-annonce.component';

describe('GererAnnonceComponent', () => {
  let component: GererAnnonceComponent;
  let fixture: ComponentFixture<GererAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
