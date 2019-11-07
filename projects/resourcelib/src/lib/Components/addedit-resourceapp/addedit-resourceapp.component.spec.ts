import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditResourceappComponent } from './addedit-resourceapp.component';

describe('AddeditResourceappComponent', () => {
  let component: AddeditResourceappComponent;
  let fixture: ComponentFixture<AddeditResourceappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditResourceappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditResourceappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
