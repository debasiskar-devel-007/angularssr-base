import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingResourceComponent } from './listing-resource.component';

describe('ListingResourceComponent', () => {
  let component: ListingResourceComponent;
  let fixture: ComponentFixture<ListingResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
