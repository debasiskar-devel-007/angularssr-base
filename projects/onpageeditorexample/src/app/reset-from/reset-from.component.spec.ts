import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetFromComponent } from './reset-from.component';

describe('ResetFromComponent', () => {
  let component: ResetFromComponent;
  let fixture: ComponentFixture<ResetFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
