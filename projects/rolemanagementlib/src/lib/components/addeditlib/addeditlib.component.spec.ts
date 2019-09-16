import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditlibComponent } from './addeditlib.component';

describe('AddeditlibComponent', () => {
  let component: AddeditlibComponent;
  let fixture: ComponentFixture<AddeditlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
