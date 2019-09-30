import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditImageCategoryComponent } from './addedit-image-category.component';

describe('AddeditImageCategoryComponent', () => {
  let component: AddeditImageCategoryComponent;
  let fixture: ComponentFixture<AddeditImageCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditImageCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditImageCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
