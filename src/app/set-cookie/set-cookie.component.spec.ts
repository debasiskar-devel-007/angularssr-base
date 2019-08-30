import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCookieComponent } from './set-cookie.component';

describe('SetCookieComponent', () => {
  let component: SetCookieComponent;
  let fixture: ComponentFixture<SetCookieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCookieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
