import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVideoManagementComponent } from './list-video-management.component';

describe('ListVideoManagementComponent', () => {
  let component: ListVideoManagementComponent;
  let fixture: ComponentFixture<ListVideoManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVideoManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVideoManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
