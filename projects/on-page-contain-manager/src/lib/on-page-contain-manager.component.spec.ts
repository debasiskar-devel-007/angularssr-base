import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPageContainManagerComponent } from './on-page-contain-manager.component';

describe('OnPageContainManagerComponent', () => {
  let component: OnPageContainManagerComponent;
  let fixture: ComponentFixture<OnPageContainManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnPageContainManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPageContainManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
