import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolemanagementlibComponent } from './rolemanagementlib.component';

describe('RolemanagementlibComponent', () => {
  let component: RolemanagementlibComponent;
  let fixture: ComponentFixture<RolemanagementlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolemanagementlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolemanagementlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
