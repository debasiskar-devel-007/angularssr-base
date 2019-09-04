import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLessionComponent } from './add-edit-lession.component';

describe('AddEditLessionComponent', () => {
  let component: AddEditLessionComponent;
  let fixture: ComponentFixture<AddEditLessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditLessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
