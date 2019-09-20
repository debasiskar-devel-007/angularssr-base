import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingBlogmanagementComponent } from './listing-blogmanagement.component';

describe('ListingBlogmanagementComponent', () => {
  let component: ListingBlogmanagementComponent;
  let fixture: ComponentFixture<ListingBlogmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingBlogmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingBlogmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
