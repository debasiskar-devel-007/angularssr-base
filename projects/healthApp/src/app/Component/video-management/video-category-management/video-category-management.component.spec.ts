import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCategoryManagementComponent } from './video-category-management.component';

describe('VideoCategoryManagementComponent', () => {
  let component: VideoCategoryManagementComponent;
  let fixture: ComponentFixture<VideoCategoryManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCategoryManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCategoryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
