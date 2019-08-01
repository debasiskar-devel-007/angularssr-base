import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderManageLibComponent } from './calender-manage-lib.component';

describe('CalenderManageLibComponent', () => {
  let component: CalenderManageLibComponent;
  let fixture: ComponentFixture<CalenderManageLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderManageLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderManageLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
