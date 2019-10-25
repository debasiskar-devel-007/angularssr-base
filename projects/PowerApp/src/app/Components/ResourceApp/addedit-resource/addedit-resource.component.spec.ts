import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditResourceComponent } from './addedit-resource.component';

describe('AddeditResourceComponent', () => {
  let component: AddeditResourceComponent;
  let fixture: ComponentFixture<AddeditResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
