import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTestemailappComponent } from './add-edit-testemailapp.component';

describe('AddEditTestemailappComponent', () => {
  let component: AddEditTestemailappComponent;
  let fixture: ComponentFixture<AddEditTestemailappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTestemailappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTestemailappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
