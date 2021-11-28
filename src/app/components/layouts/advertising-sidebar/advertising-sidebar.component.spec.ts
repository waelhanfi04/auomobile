import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingSidebarComponent } from './advertising-sidebar.component';

describe('AdvertisingSidebarComponent', () => {
  let component: AdvertisingSidebarComponent;
  let fixture: ComponentFixture<AdvertisingSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisingSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
