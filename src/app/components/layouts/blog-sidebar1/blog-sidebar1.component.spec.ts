import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSidebar1Component } from './blog-sidebar1.component';

describe('BlogSidebar1Component', () => {
  let component: BlogSidebar1Component;
  let fixture: ComponentFixture<BlogSidebar1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSidebar1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSidebar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
