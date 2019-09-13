import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddteamformComponent } from './addteamform.component';

describe('AddteamformComponent', () => {
  let component: AddteamformComponent;
  let fixture: ComponentFixture<AddteamformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddteamformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddteamformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
