import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcelibComponent } from './resourcelib.component';

describe('ResourcelibComponent', () => {
  let component: ResourcelibComponent;
  let fixture: ComponentFixture<ResourcelibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcelibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcelibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
