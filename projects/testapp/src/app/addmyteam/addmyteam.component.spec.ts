import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmyteamComponent } from './addmyteam.component';

describe('AddmyteamComponent', () => {
  let component: AddmyteamComponent;
  let fixture: ComponentFixture<AddmyteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmyteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmyteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
