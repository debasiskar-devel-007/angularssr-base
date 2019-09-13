import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddroleappComponent } from './addroleapp.component';

describe('AddroleappComponent', () => {
  let component: AddroleappComponent;
  let fixture: ComponentFixture<AddroleappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddroleappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddroleappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
