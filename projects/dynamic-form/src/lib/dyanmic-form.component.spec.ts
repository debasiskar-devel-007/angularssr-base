import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyanmicFormComponent } from './dyanmic-form.component';

describe('DyanmicFormComponent', () => {
  let component: DyanmicFormComponent;
  let fixture: ComponentFixture<DyanmicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyanmicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyanmicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
