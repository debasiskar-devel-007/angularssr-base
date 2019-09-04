import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmanagerlibComponent } from './formmanagerlib.component';

describe('FormmanagerlibComponent', () => {
  let component: FormmanagerlibComponent;
  let fixture: ComponentFixture<FormmanagerlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormmanagerlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormmanagerlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
