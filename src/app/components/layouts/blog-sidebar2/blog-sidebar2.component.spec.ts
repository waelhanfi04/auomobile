import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSidebar2Component } from './blog-sidebar2.component';

describe('BlogSidebar2Component', () => {
  let component: BlogSidebar2Component;
  let fixture: ComponentFixture<BlogSidebar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSidebar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSidebar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
