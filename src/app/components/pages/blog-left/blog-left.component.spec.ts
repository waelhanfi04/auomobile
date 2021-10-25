import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLeftComponent } from './blog-left.component';

describe('BlogLeftComponent', () => {
  let component: BlogLeftComponent;
  let fixture: ComponentFixture<BlogLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
