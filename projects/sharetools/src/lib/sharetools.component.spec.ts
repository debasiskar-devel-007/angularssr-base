import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharetoolsComponent } from './sharetools.component';

describe('SharetoolsComponent', () => {
  let component: SharetoolsComponent;
  let fixture: ComponentFixture<SharetoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharetoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharetoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
