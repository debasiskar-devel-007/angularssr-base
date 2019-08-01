import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAvailabiltyComponent } from './manage-availabilty.component';

describe('ManageAvailabiltyComponent', () => {
  let component: ManageAvailabiltyComponent;
  let fixture: ComponentFixture<ManageAvailabiltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAvailabiltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAvailabiltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
