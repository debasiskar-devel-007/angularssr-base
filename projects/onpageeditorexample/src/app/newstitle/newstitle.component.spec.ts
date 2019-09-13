import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstitleComponent } from './newstitle.component';

describe('NewstitleComponent', () => {
  let component: NewstitleComponent;
  let fixture: ComponentFixture<NewstitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewstitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
