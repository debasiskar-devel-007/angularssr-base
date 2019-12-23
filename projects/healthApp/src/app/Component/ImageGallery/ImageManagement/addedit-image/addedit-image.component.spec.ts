import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditImageComponent } from './addedit-image.component';

describe('AddeditImageComponent', () => {
  let component: AddeditImageComponent;
  let fixture: ComponentFixture<AddeditImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
