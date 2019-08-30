import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessionManagementComponent } from './lession-management.component';

describe('LessionManagementComponent', () => {
  let component: LessionManagementComponent;
  let fixture: ComponentFixture<LessionManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessionManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
