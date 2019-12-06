import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContainComponent } from './dynamic-contain.component';

describe('DynamicContainComponent', () => {
  let component: DynamicContainComponent;
  let fixture: ComponentFixture<DynamicContainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicContainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicContainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
