import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableslotsComponent } from './availableslots.component';

describe('AvailableslotsComponent', () => {
  let component: AvailableslotsComponent;
  let fixture: ComponentFixture<AvailableslotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableslotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableslotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
