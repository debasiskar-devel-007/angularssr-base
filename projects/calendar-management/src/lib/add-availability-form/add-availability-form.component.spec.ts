import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAvailabilityFormComponent } from './add-availability-form.component';

describe('AddAvailabilityFormComponent', () => {
  let component: AddAvailabilityFormComponent;
  let fixture: ComponentFixture<AddAvailabilityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAvailabilityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAvailabilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
