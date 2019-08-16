import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderlibComponent } from './calenderlib.component';

describe('CalenderlibComponent', () => {
  let component: CalenderlibComponent;
  let fixture: ComponentFixture<CalenderlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
